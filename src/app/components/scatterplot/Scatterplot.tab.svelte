<script>
  import { max } from 'd3-array';
  import { scaleLinear } from 'd3-scale';
  import { selectedRowId, tableData } from '../../services/data.service';
  import { calcPercent } from '../../services/util';
  import AxisX from './AxisX.svelte';
  import AxisY from './AxisY.svelte';
  import Tooltip from './Tooltip.svelte';

  let width = 400;
  let height = 400;
  const margin = { top: 30, right: 70, bottom: 50, left: 0 };

  $: xDomain = [0, max($tableData, (e) => e.hoursStudied) * 1.1];
  $: yDomain = [
    0,
    max($tableData, (e) =>
      e.score && e.total ? +calcPercent(e.score, e.total) : 0
    ) * 1.1,
  ];

  $: xScale = scaleLinear()
    .domain(xDomain)
    .range([0, width - margin.left - margin.right]);
  $: yScale = scaleLinear()
    .domain(yDomain)
    .range([height - margin.top - margin.bottom, 0]);

  let hoverData;
  let hovering = false;
  // to 2 second arguments are there so that we can
  const getOpacity = (rowData, _hoverData, _hovering) => {
    if (!hoverData) return 1;
    if (hoverData.id === rowData.id) return 1;
    if (hovering) return 0.5;
    return 1;
  };
</script>

<div
  class="chart-container"
  bind:clientWidth={width}
  on:mouseleave={() => (hoverData = null)}
  on:click={(e) => {
    //todo: vscode showing error for 'matches' below saying it doesnt exit. check later
    if (!e.target.matches('circle')) hoverData = null;
  }}
  on:keypress
>
  <svg {width} {height}>
    <AxisX {height} {xScale} {width} {margin} />
    <AxisY {yScale} {height} {width} {margin} />
    <g class="circles" transform="translate({margin.left} {margin.top})">
      {#each $tableData as row}
        <circle
          cx={xScale(row.hoursStudied)}
          cy={yScale(calcPercent(row.score, row.total))}
          r={hoverData && hoverData === row ? 16 : 8}
          fill={row.id === $selectedRowId
            ? 'var(--selected-row-color)'
            : 'var(--normal-row-color)'}
          stroke="black"
          opacity={getOpacity(row, hoverData, hovering)}
          on:focus={() => {}}
          on:mouseover={() => (hoverData = row)}
          on:mouseleave={() => (hovering = false)}
          on:mouseenter={() => (hovering = true)}
          on:click={() => ($selectedRowId = row.id)}
          on:keypress
        />
      {/each}
    </g>
  </svg>
  {#if hoverData}
    <Tooltip data={hoverData} {xScale} {yScale} />
  {/if}
</div>

<style lang="scss">
  .chart-container {
    --selected-row-color: #{$current-score-color};
    --normal-row-color: purple;
  }
  circle {
    outline: none;
    transition: all 200ms;
  }
</style>
