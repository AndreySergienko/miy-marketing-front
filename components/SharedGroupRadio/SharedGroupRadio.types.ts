export interface ISharedGroupRadioEmits {
  (event: 'update:modelValue', value: boolean): unknown
}

export interface ISharedGroupRadioProps {
  modelValue: boolean;
}
