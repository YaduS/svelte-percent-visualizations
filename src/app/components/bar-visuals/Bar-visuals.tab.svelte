<script>
  import { slide } from 'svelte/transition';
  import { selectedRowId, tableData } from '../../services/data.service';
  import PercentVisual from './Percent-visual.svelte';

  let showTableVisualizations = false;
  $: selectedRow = $tableData.find(({ id }) => $selectedRowId === id);
</script>

<div class="selected-visualization-cnt open">
  <h2>
    <span>Selected value visuals</span>
  </h2>
  <div class="inner">
    <PercentVisual dataId={selectedRow.id} />
  </div>
</div>
<div class="visualization-cnt" class:open={showTableVisualizations}>
  <h2>
    <span>Table value visuals</span>
    <button
      on:click={() => (showTableVisualizations = !showTableVisualizations)}
    >
      <i class="bi bi-caret-down-square-fill" />
    </button>
  </h2>
  {#if showTableVisualizations}
    <div class="inner" transition:slide>
      {#each $tableData as row (row.id)}
        <PercentVisual dataId={row.id} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .visualization-cnt,
  .selected-visualization-cnt {
    * {
      transition: all 400ms;
    }
    border: 0.5px solid $border-color-1;
    border-radius: 8px;
    margin: 2rem 0;
    width: $table-width;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    &:not(.open) {
      border-width: 0px;
      h2 {
        padding: 0 20px;
      }
    }
    h2 {
      border-bottom: 1px solid $border-color-1;
      display: flex;
      padding: 20px;
      button {
        background: none;
        border: 1px solid $border-color-1;
        padding: 5px;
        border-radius: 3px;
        margin-left: auto;
        transition: transform 400ms;
        display: grid;
        place-items: center;
        &:is(.open *) {
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
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
