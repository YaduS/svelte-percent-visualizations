<script>
  import { calcPercent } from '../../services/util';
  export let current;
  export let total;
  $: currentPercent = calcPercent(current, total);
  $: totalPercent = calcPercent(total, current);
</script>

<div class="container">
  <div
    class="bar current"
    style="width: {currentPercent > totalPercent ? 100 : currentPercent}%;"
  >
    <em>Marks obtained:&nbsp;</em>
    <strong>{current}</strong>
  </div>
  <div
    class="bar total"
    style="width: {currentPercent > totalPercent ? totalPercent : 100}%;"
  >
    <em>Out of total Mark:&nbsp;</em> <strong>{total}</strong>
  </div>
  <div
    class="bar percent"
    style="background-color: {currentPercent > totalPercent
      ? 'var(--current-score-color)'
      : 'var(--total-score-color)'};"
  >
    <div
      class="bar progress"
      style="background-color: {currentPercent > totalPercent
        ? 'var(--total-score-color)'
        : 'var(--current-score-color)'};
        width: {currentPercent >= totalPercent
        ? totalPercent
        : currentPercent}%"
    />
    <span>
      <em>Calculated percentage:&nbsp;</em>
      <strong>{currentPercent}%</strong>
    </span>
  </div>
</div>

<style lang="scss">
  .container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    --current-score-color: #{$current-score-color};
    --total-score-color: #{$total-score-color};
  }
  .bar {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fcfcfc;
    transition: all 0.5s;
  }
  em,
  strong {
    color: #fcfcfc;
  }
  em {
    font-size: 0.75rem;
  }
  .current {
    background-color: var(--current-score-color);
  }
  .total {
    background-color: var(--total-score-color);
  }
  .percent {
    width: 100%;
    position: relative;
  }
  .percent span {
    z-index: 1;
  }
  .progress {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
</style>
