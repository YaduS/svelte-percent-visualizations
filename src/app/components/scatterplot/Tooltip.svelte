<script>
  import { calcPercent } from '../../services/util';

  export let data;
  export let xScale;
  export let yScale;

  $: percent = calcPercent(data.score, data.total);
</script>

<div
  class="tooltip"
  style="top: {yScale(percent)}px;
  left: {xScale(data.hoursStudied)}px;
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
    transition: top 200ms ease, left 200ms ease;
  }
</style>
