<script>
  import SamplePercentTable from './app/sample-marks-percent-table.svelte';
</script>

<div class="wrapper">
  <h1>Percentage Calculations</h1>
  <main>
    <SamplePercentTable />
  </main>
</div>

<style>
  .wrapper {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 2rem 0;
  }
</style>
