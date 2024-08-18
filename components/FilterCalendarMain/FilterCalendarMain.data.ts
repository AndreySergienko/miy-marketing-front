import type { IMonth, IMonthDay } from "./FilterCalendarMain.types";

const weekDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const getDaysByMonth = (month: number): IMonthDay[] => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  if (date.getMonth() !== month - 1) {
    date.setDate(1);
  }

  date.setMonth(month - 1);

  const result: IMonthDay[] = [];

  while (date.getMonth() === month - 1) {
    result.push({
      date: new Date(date),
      number: date.getDate(),
      inWeek: weekDays[date.getDay()],
    });
    date.setDate(date.getDate() + 1);
  }

  return result;
};

export const getMonthsFromToday = (): IMonth[] => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const months: IMonth[] = [];

  do {
    months.push({
      index: date.getMonth() + 1,
      name: date.toLocaleString("ru-RU", { month: "long" }),
    });
    date.setMonth(date.getMonth() + 1);
  } while (date.getMonth() !== 0);

  return months;
};
