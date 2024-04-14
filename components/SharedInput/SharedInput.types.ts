export interface ISharedInputProps {
    modelValue?: string;
    name: string;
    type: string;
    error?: string;
}

export interface ISharedInputEmits {
    (event: 'update:modelValue', value: string): undefined
}
