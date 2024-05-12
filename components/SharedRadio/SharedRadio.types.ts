export interface ISharedRadioProps {
  value: string;
  name: string;
  checked: boolean;
}
export interface ISharedRadioEmits {
  (event: 'change', value: string): unknown
}
