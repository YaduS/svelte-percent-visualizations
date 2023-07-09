import { writable } from 'svelte/store';

const initialTableData = [
  {
    score: 30,
    total: 100,
    hoursStudied: 1.5,
    id: 1,
    name: 'Alice',
  },
  {
    score: 10,
    total: 20,
    hoursStudied: 3,
    id: 2,
    name: 'Bob',
  },
  {
    score: 120,
    total: 90,
    hoursStudied: 4,
    id: 3,
    name: 'Charlie',
  },
  {
    score: 65,
    total: 90,
    hoursStudied: 2,
    id: 4,
    name: 'Dave',
  },
  {
    score: 75,
    total: 90,
    hoursStudied: 4,
    id: 5,
    name: 'Eve',
  },
  {
    score: 120,
    total: 90,
    hoursStudied: 8,
    id: 6,
    name: 'Frank',
  },
];
export const tableData = writable(initialTableData);
export let selectedRowId = writable(initialTableData[0].id);

export const addRow = (row) => {
  tableData.update((tData) => {
    const id = tData.length + 1;
    return [
      ...tData,
      row
        ? row
        : {
            id,
            score: 100,
            total: 100,
            hoursStudied: 2.5,
            name: `Student ${id}`,
          },
    ];
  });
};
