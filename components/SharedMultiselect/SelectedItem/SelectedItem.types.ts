export interface ISelectedItemProps {
  text: string;
}

export interface ISelectedItemEmits {
  (e: "remove"): void;
}
