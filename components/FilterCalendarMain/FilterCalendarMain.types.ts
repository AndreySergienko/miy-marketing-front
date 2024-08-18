import type { ICalendarRange } from "~/store/filters/calendar.store";

export interface IMonth {
  index: number;
  name: string;
}

export interface IMonthDay {
  date: Date;
  number: number;
  inWeek: string;
}

export interface IFilterCalendarMainProps {
  selectedDates: ICalendarRange[];
}

export interface IFilterCalendarMainEmits {
  (e: "selectDate", date: Date): void;
}
