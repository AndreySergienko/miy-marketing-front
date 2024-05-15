 export interface ISharedInputProps {
    modelValue?: string | number;
    name: string;
    type: string;
    error?: string;
}

export interface ISharedInputEmits {
    (event: 'update:modelValue', value: string): undefined
}
