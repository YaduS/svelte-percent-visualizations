import { writable } from 'svelte/store';

export const tableData = writable([
  {
    score: 30,
    total: 100,
    hoursStudied: 1.5,
    id: 1,
  },
  {
    score: 10,
    total: 20,
    hoursStudied: 3,
    id: 2,
  },
  {
    score: 120,
    total: 90,
    hoursStudied: 4,
    id: 3,
  },
]);

export const addRow = (row) => {
  tableData.update((tData) => {
    return [
      ...tData,
      row
        ? row
        : { id: tData.length + 1, score: 100, total: 100, hoursStudied: 2.5 },
    ];
  });
};
