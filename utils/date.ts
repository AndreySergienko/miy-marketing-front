export const convertUtcDateToDate = (timestamp: number) =>
  new Date(+timestamp).toLocaleDateString('ru-RU');

export const convertUtcDateToTime = (timestamp: number) =>
    new Date(+timestamp)
      .toLocaleTimeString('ru-RU')
      .slice(0, 5);
