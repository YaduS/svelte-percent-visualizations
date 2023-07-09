<script>
  import { fade } from 'svelte/transition';
  import BarVisualsTab from './bar-visuals/Bar-visuals.tab.svelte';
  import ScatterplotTab from './scatterplot/Scatterplot.tab.svelte';

  const items = [
    {
      label: 'Bar Visuals',
      id: 1,
      component: BarVisualsTab,
    },
    {
      label: 'Scatter Plot',
      id: 2,
      component: ScatterplotTab,
    },
  ];
  let activeTabId = 2;
  const handleClick = (tabId) => () => (activeTabId = tabId);
</script>

<div class="tab-container">
  <ol>
    {#each items as item}
      <li class:active={activeTabId === item.id}>
        <span on:click={handleClick(item.id)} role="button">{item.label}</span>
      </li>
    {/each}
  </ol>

  {#each items as item}
    {#if item.id === activeTabId}
      <div transition:fade={{ duration: 300 }} class="tab-content-box">
        <svelte:component this={item.component} />
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .tab-container {
    max-width: 100%;
    width: $table-width;
    margin-top: 20px;
  }
  .tab-content-box {
    margin-bottom: 10px;
    padding: 20px;
    border: 1px solid $border-color-1;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 0;
    background-color: $primary-bg-color;
  }
  ol {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid $border-color-1;
  }
  li {
    margin-bottom: -1px;
    span {
      border: 1px solid transparent;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      display: block;
      padding: 0.5rem 1rem;
      cursor: pointer;
      &:hover {
        border-color: $border-color-1 $border-color-1 $border-color-1;
      }
    }
  }

  li.active > span {
    color: #495057;
    background-color: $primary-bg-color;
    border-color: $border-color-1 $border-color-1 $primary-bg-color;
  }
</style>
