import type { OptionsItem } from "../DefaultSelect/DefaultSelect.types";

export interface ITelegramEditMainData {
  name: string;
  url: string;
  category: string;
}

export interface ITelegramEditMainProps extends ITelegramEditMainData {
  categories: OptionsItem[];
}

export interface ITelegramEditMainEmits {
  (e: "changeData", data: ITelegramEditMainData): void;
}
