<script>
  import { slide } from 'svelte/transition';
  import PercentVisual from './app/percent-visual.svelte';
  import SamplePercentTable from './app/sample-marks-percent-table.svelte';
  import { tableData } from './app/services/data.service';
  let selectedRowId = $tableData[0].id;
  $: selectedRow = $tableData.find(({ id }) => selectedRowId === id);
  let showTableVisualizations = true;
  let showSelectedTableVisualizations = true;
</script>

<div class="wrapper">
  <h1>Percentage Calculations</h1>
  <main>
    <SamplePercentTable bind:selectedRowId />
  </main>
  <div class="selected-visualization-cnt">
    <h2>
      <span>Selected value visuals</span>
      <button
        on:click={() =>
          (showSelectedTableVisualizations = !showSelectedTableVisualizations)}
        class:open={showSelectedTableVisualizations}
      >
        <i class="bi bi-caret-down-square-fill" />
      </button>
    </h2>
    {#if showSelectedTableVisualizations}
      <div class="inner" transition:slide>
        <PercentVisual current={selectedRow.score} total={selectedRow.total} />
      </div>
    {/if}
  </div>
  <div class="visualization-cnt">
    <h2>
      <span>Table value visuals</span>
      <button
        on:click={() => (showTableVisualizations = !showTableVisualizations)}
        class:open={showTableVisualizations}
      >
        <i class="bi bi-caret-down-square-fill" />
      </button>
    </h2>
    {#if showTableVisualizations}
      <div class="inner" transition:slide>
        {#each $tableData as row (row.id)}
          <PercentVisual current={row.score} total={row.total} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  h1 {
    margin: 0 0 2rem;
  }
  .visualization-cnt,
  .selected-visualization-cnt {
    border: 0.5px solid #444;
    border-radius: 8px;
    margin: 2rem 0;
    width: 720px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      border-bottom: 1px solid #444;
      display: flex;
      padding: 20px;
      button {
        background: none;
        border: 1px solid #444;
        padding: 5px;
        border-radius: 3px;
        margin-left: auto;
        transition: transform 400ms;
        display: grid;
        place-items: center;
        &.open {
          transform: rotate(-180deg);
        }
        i {
          font-size: 1rem;
          display: grid;
          place-items: center;
        }
      }
      &:last-child {
        border-bottom: 0;
      }
    }
    &:last-child {
      margin-top: 0;
    }
  }
</style>
