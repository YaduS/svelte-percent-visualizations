<script>
  import { calcPercent } from '../../services/util';

  export let data;
  export let xScale;
  export let yScale;

  $: percent = calcPercent(data.score, data.total);
  $: topPosition = yScale(percent) + 40;
  $: leftPosition = xScale(data.hoursStudied) - 80;
</script>

<div
  class="tooltip"
  style="top: {topPosition}px;
  left: {leftPosition}px;
  "
>
  <h2>Score: {data.score} / {data.total}</h2>
  <p>{percent}%</p>
  <p>Hours: {data.hoursStudied}</p>
</div>

<style>
  h2 {
    font-weight: 700;
    font-size: 1.1rem;
  }
  .tooltip {
    position: absolute;
    padding: 0.5rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    pointer-events: none;
    transition: top 300ms linear, left 300ms linear;
    width: 150px;
  }
</style>
