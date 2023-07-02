<script>
  import PercentVisual from './app/percent-visual.svelte';
  import SamplePercentTable from './app/sample-marks-percent-table.svelte';

  let tableData = [
    {
      score: 30,
      total: 100,
      id: 1,
    },
    {
      score: 10,
      total: 20,
      id: 2,
    },
    {
      score: 118,
      total: 120,
      id: 5,
    },
    {
      score: 23,
      total: 50,
      id: 3,
    },
    // {
    //   score: 13,
    //   total: 40,
    //   id: 4,
    // },
  ];
  let selectedRowId = tableData[2].id;
</script>

<div class="wrapper">
  <h1>Percentage Calculations</h1>
  <main>
    <SamplePercentTable data={tableData} bind:selectedRowId />
  </main>
  <div class="visualization-container">
    {#each tableData as row (row.id)}
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
