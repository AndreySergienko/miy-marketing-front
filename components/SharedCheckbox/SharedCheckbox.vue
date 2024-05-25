<template>
  <div class="checkbox">
    <input class="checkbox__input" type="checkbox" v-model="checkbox">
    <label class="checkbox__label"><slot /></label>
  </div>
</template>

<script setup lang="ts">
  import type { ISharedCheckboxProps, ISharedCheckboxEmits } from './SharedCheckbox.types';

  const props = defineProps<ISharedCheckboxProps>()
  const emits = defineEmits<ISharedCheckboxEmits>()

  const checkbox = computed({
    get() {
      return props.modelValue
    },
    set(value:boolean) {
      emits('update:modelValue', value)
    }
  })
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
 .checkbox {
  display: flex;
  align-items: flex-start;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-medium);

  @include media.media-breakpoint-down(sm) {
    font-size: var(--font-size-s);
  }

  &__input {
    margin-top: 5px;
  }
 }
</style>
