export interface OptionsItem {
  label: string;
  value: string;
}

export interface DefaultSelectProps {
  label?: string;
  name: string;
  placeholder?: string;
  options: OptionsItem[];
  hideIcon?: boolean;
}
