<script>
  import { tableData } from '../../services/data.service';
  import { calcPercent } from '../../services/util';
</script>

<svg>
  {#each $tableData as row}
    <circle
      cx={row.hoursStudied}
      cy={calcPercent(row.score, row.total)}
      r="4"
    />
    <!-- todo: what is the way where we dont have to run calcPercent every time? --ys -->
  {/each}
</svg>

<style lang="scss"></style>
