<script>
  import { tableData } from '../../services/data.service';
  import { calcPercent } from '../../services/util';
  let width = 400;
  let height = 400;

  import { scaleLinear } from 'd3-scale';

  let maxHoursStudied = 0;
  let maxPercentage = 0;
  $: {
    // calculate max hours
    maxHoursStudied = $tableData.reduce(
      (t, c) => (t > c.hoursStudied ? t : c.hoursStudied),
      0
    );
    // add a 10% extra value to maxHoursStudied to get that extra padding at the end for Svg,
    // wonder what module/function in S3 i could've used to get the same effect
    maxHoursStudied *= 1.1;

    // calculate max Percentage : todo: important => use some D3 library to find
    // max instead of using these 2 pure JS methods
    maxPercentage = Math.max(
      ...$tableData
        .map((e) => +calcPercent(e.score, e.total))
        .filter((e) => !isNaN(e))
    );
    maxPercentage *= 1.1;
  }

  $: xScale = scaleLinear().domain([0, maxHoursStudied]).range([0, width]);
  $: yScale = scaleLinear().domain([0, maxPercentage]).range([0, height]);
</script>

<svg {width} {height}>
  {#each $tableData as row}
    <circle
      cx={xScale(row.hoursStudied)}
      cy={yScale(calcPercent(row.score, row.total))}
      r="4"
    />
    <!-- todo: what is the way where we dont have to run calcPercent every time? --ys -->
  {/each}
</svg>

<style lang="scss"></style>
