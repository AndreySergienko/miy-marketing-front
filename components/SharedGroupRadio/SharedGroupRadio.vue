<template>
  <slot :update-value="updateValue" />
</template>

<script setup lang="ts">
import type {ISharedGroupRadioEmits, ISharedGroupRadioProps} from "~/components/SharedGroupRadio/SharedGroupRadio.types";

const props = defineProps<ISharedGroupRadioProps>()
const emits = defineEmits<ISharedGroupRadioEmits>()

const updateValue = (value: string) => {
  emits('update:modelValue', value === 'true')
}
</script>
