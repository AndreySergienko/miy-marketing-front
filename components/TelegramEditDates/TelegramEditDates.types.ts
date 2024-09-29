export interface ITelegramEditDatesProps {
  dates: string[];
}

export interface ITelegramEditDatesEmits {
  (e: "changeData", data: { dates: string[] }): void;
}
