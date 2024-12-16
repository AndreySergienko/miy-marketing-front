export interface ISharedInputProps {
    modelValue?: string;
    name: string;
    type: string;
    error?: string;
    isDisabled?: boolean;
    placeholder: string;
}

export interface ISharedInputEmits {
    (event: 'update:modelValue', value: string): undefined
}
