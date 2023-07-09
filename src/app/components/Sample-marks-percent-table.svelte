<script>
  import {
    addRow,
    tableData as data,
    selectedRowId,
  } from '../services/data.service';
  import { calcPercent } from '../services/util';
</script>

<em class="info">
  <strong
    >Edit underlined values by either typing them in (or using arrow keys after
    selecting them for a smoother value change)</strong
  >
</em>
<table class="table-bordered">
  <thead>
    <tr>
      <th class="select-radio"><span>Select</span></th>
      <th class="name"><span>Name</span></th>
      <th class="score"><span>Marks obtained</span></th>
      <th class="total"><span>Out of Total Marks</span></th>
      <th class="hours-studied"><span>Hours Studied</span></th>
      <th class="percent"><span>Percentage</span></th>
    </tr>
  </thead>
  <tbody>
    {#each $data as scoreDetail (scoreDetail.id)}
      <tr class:active={$selectedRowId === scoreDetail.id}>
        <td class="select-radio"
          ><label>
            <input
              type="radio"
              value={scoreDetail.id}
              bind:group={$selectedRowId}
              name="row"
            />
          </label></td
        >
        <td class="name">
          <label>
            <input type="text" bind:value={scoreDetail.name} />
          </label>
        </td>
        <td class="score">
          <label>
            <input type="number" bind:value={scoreDetail.score} />
          </label>
        </td>
        <td class="total">
          <label>
            <input type="number" bind:value={scoreDetail.total} />
          </label>
        </td>
        <td class="hours-studied">
          <label>
            <input type="number" bind:value={scoreDetail.hoursStudied} />
          </label>
        </td>
        <td class="percent"
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
      <td colspan="6">
        <button class="add-btn" on:click={() => addRow()}>
          <strong>Add new marks</strong> <i class="bi bi-plus-circle" />
        </button>
      </td>
    </tr>
  </tbody>
</table>

<style lang="scss">
  * {
    font-size: 16px;
  }
  .info {
    margin: 1rem auto;
    max-width: 85%;
    text-align: center;
    display: block;
  }
  table {
    border: 0.5px solid #444;
    overflow: hidden;
    border-radius: 8px;
    max-width: 100%;
    width: $table-width;
    margin: auto;
  }
  tr.active {
    background-color: $custom-light-green;
  }
  th {
    border: 0.5px solid #444;
    padding: 12px 8px;
    &:is(.score, .total, .hours-studied) {
      width: 15%;
    }
    &.select-radio {
      width: 10%;
    }
    &.name {
      width: 20%;
    }
    &.percent {
      width: 25%;
    }
  }
  table,
  tr,
  td,
  th {
    border-collapse: separate;
    border-spacing: 0;
  }
  tr > td {
    border: 0.5px solid #444;
    padding: 12px 8px;
    text-align: center;
  }
  th:first-child {
    border-top-left-radius: 8px;
  }
  th:last-child {
    border-top-right-radius: 8px;
  }
  tr:last-child td:first-child {
    border-bottom-left-radius: 8px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
  td.select-radio {
    text-align: center;
    vertical-align: middle;
    padding: 0;
    height: 1px; // nasty hack for fic mentioned => https://stackoverflow.com/questions/3542090/how-to-make-div-fill-td-height
    label {
      display: grid;
      place-items: center;
      height: 100%;
    }
  }

  tr:last-child {
    td {
      padding: 10px;
      button {
        border-radius: 4px;
        border: 1px solid #444;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        gap: 8px;
        font-size: 16px;
        background-color: $custom-light-green;
        i {
          font-size: 18px;
        }
      }
    }
  }
  input {
    border: 0.5px solid transparent;
    border-bottom-color: #444;
    padding: 5px;
    border-radius: 2px;
    outline: none !important;
    background: none;
    max-width: 100px;
    &:is(.name *) {
      max-width: initial;
    }
  }
  input:focus-visible {
    border-color: #444;
  }
</style>
