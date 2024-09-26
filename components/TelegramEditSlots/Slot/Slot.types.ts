import type { ISlotsItem } from "../TelegramEditSlots.types";

export interface ISlotProps extends ISlotsItem {}

export interface ISlotEmits {
  (e: "changeData", data: ISlotsItem): void;
  (e: "remove"): void;
}
