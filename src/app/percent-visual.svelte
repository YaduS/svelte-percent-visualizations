<script>
  import { calcPercent } from '../lib/util';
  export let current;
  export let total;
  $: percent = calcPercent(current, total);
</script>

<div class="container">
  <div class="current" style="width: {percent}%;">
    Marks obtained: {current}
  </div>
  <div class="total">Out of total Mark: {total}</div>
  <div class="percent" style="width: {percent}%;">
    Calculated percentage: {percent}%
  </div>
</div>

<style>
  .container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .current,
  .total,
  .percent {
    height: 40px;
    display: grid;
    place-items: center;
    color: #fcfcfc;
  }
  .current {
    background-color: #515e3d;
  }
  .total {
    background-color: #2d6c2d;
    width: 100%;
  }
  .percent {
    background-color: #785d34;
  }
</style>
