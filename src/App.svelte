<script>
  import PercentVisual from './app/percent-visual.svelte';
  import SamplePercentTable from './app/sample-marks-percent-table.svelte';
  import { tableData } from './lib/data.service';
  let selectedRowId = $tableData[2].id;
</script>

<div class="wrapper">
  <h1>Percentage Calculations</h1>
  <main>
    <SamplePercentTable bind:selectedRowId />
  </main>
  <div class="visualization-container">
    {#each $tableData as row (row.id)}
      <PercentVisual current={row.score} total={row.total} />
    {/each}
  </div>
</div>

<style>
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
  .visualization-container {
    border: 0.5px solid #444;
    border-radius: 8px;
    margin: 2rem 0;
    width: 720px;
    max-width: 100%;
  }
</style>
