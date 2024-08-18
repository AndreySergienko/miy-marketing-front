import type { IMonthDay } from "../FilterCalendarMain.types";

export interface IDayBlockProps {
  day: IMonthDay;
  isCurrent: boolean;
  isSelected: boolean;
}

export interface IDayBlockEmits {
  (e: "selectTriggered"): void;
}
