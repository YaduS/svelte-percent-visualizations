<script>
  import { calcPercent } from '../lib/util';

  export let data;
  export let selectedRowId;
</script>

<table class="table-bordered">
  <tbody>
    <tr>
      <td><span>Select</span></td>
      <td><span>Marks obtained</span></td>
      <td><span>Out of Total Marks</span></td>
      <td><span>Percentage</span></td>
    </tr>
    {#each data as scoreDetail (scoreDetail.id)}
      <tr>
        <td
          ><label>
            <input
              type="radio"
              value={scoreDetail.id}
              bind:group={selectedRowId}
              name="row"
            />
          </label></td
        >
        <td>
          <label>
            <input type="number" bind:value={scoreDetail.score} max="1000" />
          </label>
        </td>
        <td>
          <label>
            <input type="number" bind:value={scoreDetail.total} max="1000" />
          </label>
        </td>
        <td
          ><span
            ><span>({scoreDetail.score || '-'}/{scoreDetail.total || '-'})</span
            ></span
          ><span
            >&nbsp; × 100 = {calcPercent(
              scoreDetail.score,
              scoreDetail.total
            )}%</span
          ></td
        >
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border: 0.5px solid #444;
    overflow: hidden;
    border-radius: 8px;
    max-width: 100%;
    width: 720px;
  }
  table,
  tr,
  td {
    border-collapse: separate;
    border-spacing: 0;
  }
  tr > *:is(td, th) {
    border: 0.5px solid #444;
    padding: 12px 8px;
  }
  tr:first-child td:first-child {
    border-top-left-radius: 8px;
  }
  tr:first-child td:last-child {
    border-top-right-radius: 8px;
  }
  tr:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
  td:first-child {
    text-align: center;
    vertical-align: middle;
  }
  td:first-child > label {
    display: grid;
    place-items: center;
  }
  input {
    border: 0.5px solid transparent;
    border-radius: 2px;
    outline: none !important;
    background: none;
  }
  input:focus-visible {
    border-color: #444;
  }
</style>
