import type { OptionsItem } from "../DefaultSelect/DefaultSelect.types";

export interface ITelegramEditMainProps {
  name: string;
  url: string;
  category: string;
  categories: OptionsItem[];
}

export interface ITelegramEditMainEmits {
  (
    e: "changeData",
    data: { name: string; url: string; category: string }
  ): void;
}
