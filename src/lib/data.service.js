import { writable } from 'svelte/store';

export const tableData = writable([
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
]);
