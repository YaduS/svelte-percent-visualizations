<script>
  export let height;
  export let width;
  export let xScale;
  export let margin;
  const xTick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // todo: use d3.range or some such operator to generate appropriate ticks, currently it not synced..
</script>

<g>
  {#each xTick as tick}
    <text
      x={xScale(tick)}
      y={height - margin.bottom}
      dy="6"
      dominant-baseline="hanging">{tick}</text
    >
    {#if tick === 5}
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
