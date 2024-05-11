export interface ISharedMultiselectOption {
  value: string;
  title: string;
}

export interface ISharedMultiselectProps {
  title: string;
  selected: string[];
  options: ISharedMultiselectOption[];
}

export interface ISharedMultiselectEmits {
  (e: "select", value: string): void;
  (e: "unselect", value: string): void;
}
