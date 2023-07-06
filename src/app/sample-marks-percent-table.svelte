<script>
  import { addRow, tableData as data } from './services/data.service';
  import { calcPercent } from './services/util';

  export let selectedRowId;
</script>

<table class="table-bordered">
  <tbody>
    <tr>
      <td><span>Select</span></td>
      <td><span>Marks obtained</span></td>
      <td><span>Out of Total Marks</span></td>
      <td><span>Hours Studied</span></td>
      <td><span>Percentage</span></td>
    </tr>
    {#each $data as scoreDetail (scoreDetail.id)}
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
            <input type="number" bind:value={scoreDetail.score} />
          </label>
        </td>
        <td>
          <label>
            <input type="number" bind:value={scoreDetail.total} />
          </label>
        </td>
        <td>
          <label>
            <input type="number" bind:value={scoreDetail.hoursStudied} />
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
    <tr>
      <td colspan="5">
        <button class="add-btn" on:click={() => addRow()}>
          Add new marks <i class="bi bi-plus-circle" />
        </button>
      </td>
    </tr>
  </tbody>
</table>

<style lang="scss">
  table {
    border: 0.5px solid #444;
    overflow: hidden;
    border-radius: 8px;
    max-width: 100%;
    width: $table-width;
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
  tr:last-child {
    td {
      padding: 10px;
      button {
        background: transparent;
        border-radius: 4px;
        border: 1px solid #444;
        width: 200px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        gap: 8px;
        i {
          font-size: 14px;
        }
      }
    }
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
