export interface IOptionsItemProps {
  text: string;
  isSelected: boolean;
}

export interface IOptionsItemEmits {
  (e: "trigger"): void;
}
