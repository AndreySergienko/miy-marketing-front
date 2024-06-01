export const convertUtcDateToDate = (timestamp: number) =>
  new Date(+timestamp).toLocaleDateString('ru-RU');
