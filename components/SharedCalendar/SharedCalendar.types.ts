export interface ISharedCalendarProps {
  title: string;
  selected: Date | null;
}

export interface ISharedCalendarEmits {
  (e: "select", value: Date): void;
}
