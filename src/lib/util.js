export const calcPercent = (current, total) =>
  total ? Math.round((current / total) * 100 * 100) / 100 : '-';
