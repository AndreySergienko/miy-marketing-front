<template>
  <div class="selected-item">
    <span class="selected-item__text">{{ text }}</span>
    <NuxtIcon
      class="selected-item__icon"
      name="select-remove"
      filled
      @click="$emit('remove')"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  ISelectedItemEmits,
  ISelectedItemProps,
} from "./SelectedItem.types";

defineProps<ISelectedItemProps>();
defineEmits<ISelectedItemEmits>();
</script>

<style scoped lang="scss">
.selected-item {
  display: inline-flex;
  align-items: center;
  gap: var(--ident-l);
  padding: var(--ident-m) var(--ident-l);
  background: var(--color-blue);
  border-radius: var(--ident-ml);
  color: var(--color-white);

  &__text {
    font-size: var(--font-size-ss);
    font-weight: var(--font-weight-medium);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10px;
    height: 10px;
    cursor: pointer;

    :deep(svg) {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }
}
</style>
