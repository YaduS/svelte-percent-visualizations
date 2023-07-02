<script>
  import { calcPercent } from '../lib/util';
  export let current;
  export let total;
  $: percent = calcPercent(current, total);
</script>

<div class="container">
  <div class="current" style="width: {percent}%;">
    <em>Marks obtained:&nbsp;</em>
    <strong>{current}</strong>
  </div>
  <div class="total">
    <em>Out of total Mark:&nbsp;</em> <strong>{total}</strong>
  </div>
  <div class="percent" style="width: {percent}%;">
    <em>Calculated percentage:&nbsp;</em>
    <strong>{percent}%</strong>
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
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fcfcfc;
  }
  em,
  strong {
    color: #fcfcfc;
  }
  em {
    font-size: 0.75rem;
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
