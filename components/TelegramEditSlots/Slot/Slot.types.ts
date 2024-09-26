export interface ISlotProps {
  time: string;
  interval: string;
  price: number;
}

export interface ISlotEmits {
  (
    e: "changeData",
    data: { time: string; interval: string; price: number }
  ): void;
  (e: "remove"): void;
}
