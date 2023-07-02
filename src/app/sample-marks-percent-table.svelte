<script>
  const data = [
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
      score: 23,
      total: 50,
      id: 3,
    },
    {
      score: 13,
      total: 40,
      id: 4,
    },
    {
      score: 108,
      total: 120,
      id: 5,
    },
  ];
  const calcPercent = (scoreDetail) =>
    (scoreDetail.score / scoreDetail.total) * 100;
</script>

<table class="table-bordered">
  <tbody>
    <tr>
      <td><span>Marks obtained</span></td>
      <td><span>Out of Total Marks</span></td>
      <td><span>Percentage</span></td>
    </tr>
    {#each data as scoreDetail (scoreDetail.id)}
      <tr>
        <td>
          <span>
            {scoreDetail.score}
          </span>
        </td>
        <td>
          <span>
            {scoreDetail.total}
          </span>
        </td>
        <td
          ><span><span>({scoreDetail.score}/{scoreDetail.total})</span></span
          ><span>× 100 = {calcPercent(scoreDetail)}%</span></td
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
    background: #f1edff;
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
</style>
