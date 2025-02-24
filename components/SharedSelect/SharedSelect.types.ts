export interface ISharedSelectOption {
  value: string;
  title: string;
}

export interface ISharedSelectProps {
  title: string;
  selected: string;
  options: ISharedSelectOption[];
  placeholder?: string;
  filter?: boolean; 
}

export interface ISharedSelectEmits {
  (e: "select", value: string): void;
}
