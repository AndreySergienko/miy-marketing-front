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
  selectedDates: Date[];
}

export interface IFilterCalendarMainEmits {
  (e: "selectDate", date: Date): void;
}
