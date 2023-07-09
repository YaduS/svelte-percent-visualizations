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
