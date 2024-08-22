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
  selectedRange: ICalendarRange | null;
}

export interface IFilterCalendarMainEmits {
  (e: "selectDate", date: Date): void;
}
