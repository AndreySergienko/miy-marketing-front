// export const convertUtcDateToDate = (timestamp: number) =>
//   new Date(+timestamp).toLocaleDateString('ru-RU');

// export const convertUtcDateToTime = (timestamp: number) =>
//     new Date(+timestamp)
//       .toLocaleTimeString('ru-RU')
//       .slice(0, 5);


export const convertUtcDateToDate = (timestamp: number) => {
  const date = new Date(+timestamp);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  
  return `${day}.${month}.${year}`;
};

export const convertUtcDateToTime = (timestamp: number) => {
  const date = new Date(+timestamp);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  
  return `${hours}:${minutes}`;
};
