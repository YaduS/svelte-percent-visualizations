<script>
  export let height;
  export let width;
  export let yScale;
  export let margin;
  const yTick = [0, 50, 100, 150, 200]; // todo: use d3.range or some such operator to generate appropriate ticks, currently it not synced..
</script>

<g transform="translate({margin.left} {margin.top})">
  {#each yTick as tick}
    <text x={0} y={yScale(tick)} dy="-6">{tick}%</text>
    <line
      x1="0"
      y1={yScale(tick)}
      x2={width}
      y2={yScale(tick)}
      stroke={tick === 0 ? 'black' : '#cecece'}
    />
  {/each}
</g>

<style></style>
