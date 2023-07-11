<script>
  export let height;
  export let width;
  export let xScale;
  export let margin;
  $: xTicks = xScale.ticks();
</script>

<g>
  {#each xTicks as tick, i}
    <text
      x={xScale(tick)}
      y={height - margin.bottom}
      dy="6"
      dominant-baseline="hanging">{tick}</text
    >
    {#if i === Math.round(xTicks.length / 2)}
      <text
        x={xScale(tick)}
        y={height - margin.bottom}
        dy="20"
        dominant-baseline="hanging"
        text-anchor="middle">Hours studied</text
      >
    {/if}
  {/each}
</g>

<style></style>
