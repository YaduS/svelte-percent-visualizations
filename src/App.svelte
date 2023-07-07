<script>
  import SamplePercentTable from './app/components/Sample-marks-percent-table.svelte';
  import Tabs from './app/components/Tabs.svelte';
  import { tableData } from './app/services/data.service';
  let selectedRowId = $tableData[0].id;
  $: selectedRow = $tableData.find(({ id }) => selectedRowId === id);
</script>

<div class="wrapper">
  <h1>Percentage Calculations</h1>
  <main>
    <SamplePercentTable />
  </main>
  <Tabs />
  <!-- <div
    class="selected-visualization-cnt"
    class:open={showSelectedTableVisualizations}
  >
    <h2>
      <span>Selected value visuals</span>
      <button
        on:click={() =>
          (showSelectedTableVisualizations = !showSelectedTableVisualizations)}
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
          <PercentVisual current={row.score} total={row.total} />
        {/each}
      </div>
    {/if}
  </div> -->
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
</style>
