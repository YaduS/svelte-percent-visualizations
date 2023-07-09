<script>
  import { max } from 'd3-array';
  import { scaleLinear } from 'd3-scale';
  import { tableData } from '../../services/data.service';
  import { calcPercent } from '../../services/util';
  import AxisX from './AxisX.svelte';
  import AxisY from './AxisY.svelte';
  import Tooltip from './Tooltip.svelte';

  let width = 400;
  let height = 400;
  const margin = { top: 30, right: 70, bottom: 50, left: 0 };

  // few reactive declarations for calculating maxHours and maxPercent
  $: maxHoursStudied = max($tableData, (e) => e.hoursStudied * 1.1); // adding a 10% right margin by multiplying with 1.1;
  // find out how to get the same effect using just d3 mode
  $: maxPercentage = max($tableData, (e) => {
    if (e.score && e.total) return +calcPercent(e.score, e.total) * 1.1;
    else return 0;
  });

  $: xScale = scaleLinear()
    .domain([0, maxHoursStudied])
    .range([0, width - margin.left - margin.right]);
  $: yScale = scaleLinear()
    .domain([0, maxPercentage])
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
          fill="purple"
          stroke="black"
          opacity={getOpacity(row, hoverData, hovering)}
          on:focus={() => {}}
          on:mouseover={() => (hoverData = row)}
          on:mouseleave={() => (hovering = false)}
          on:mouseenter={() => (hovering = true)}
        />
      {/each}
    </g>
  </svg>
  {#if hoverData}
    <Tooltip data={hoverData} {xScale} {yScale} />
  {/if}
</div>

<style lang="scss"></style>
