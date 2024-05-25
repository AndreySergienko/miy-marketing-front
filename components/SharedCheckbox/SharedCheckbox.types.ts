export interface ISharedCheckboxProps {
  modelValue?: boolean
}

export interface ISharedCheckboxEmits {
  (event: 'update:modelValue', value:boolean ): undefined
}