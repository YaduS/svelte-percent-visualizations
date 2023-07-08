<script>
  import { max } from 'd3-array';
  import { scaleLinear } from 'd3-scale';
  import { tableData } from '../../services/data.service';
  import { calcPercent } from '../../services/util';
  let width = 400;
  let height = 400;

  // few reactive declarations for calculating maxHours and maxPercent
  $: maxHoursStudied = max($tableData, (e) => e.hoursStudied * 1.1); // adding a 10% right margin by multiplying with 1.1;
  // find out how to get the same effect using just d3 mode
  $: maxPercentage = max($tableData, (e) => {
    if (e.score && e.total) return +calcPercent(e.score, e.total) * 1.1;
    else return 0;
  });

  $: xScale = scaleLinear().domain([0, maxHoursStudied]).range([0, width]);
  $: yScale = scaleLinear().domain([0, maxPercentage]).range([height, 0]);
</script>

<svg {width} {height}>
  {#each $tableData as row}
    <circle
      cx={xScale(row.hoursStudied)}
      cy={yScale(calcPercent(row.score, row.total))}
      r="8"
      fill="purple"
      stroke="black"
    />
    <!-- todo: what is the way where we dont have to run calcPercent every time? --ys -->
  {/each}
</svg>

<style lang="scss"></style>
