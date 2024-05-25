<template>
  <div class="options-item">
    <div :class="['options-item__icon', iconClass]" @click="$emit('trigger')">
      <NuxtIcon class="options-item__icon-check" name="select-check" filled />
    </div>
    <span class="options-item__text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IOptionsItemEmits, IOptionsItemProps } from "./OptionsItem.types";

const props = defineProps<IOptionsItemProps>();
const { isSelected } = toRefs(props);

defineEmits<IOptionsItemEmits>();

const iconClass = computed(() => ({
  "options-item__icon--checked": isSelected.value,
}));
</script>

<style scoped lang="scss">
.options-item {
  flex: 1 0;
  display: flex;
  align-items: center;
  padding: var(--indent-s) var(--indent-m);
  gap: var(--indent-l);
  overflow: hidden;

  &__text {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--indent-s);
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: 1px solid var(--color-light-gray);

    &-check {
      display: none;
      width: 24px;
      height: 24px;

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }

    &--checked {
      background: var(--color-blue);

      .options-item__icon-check {
        display: block;
      }
    }
  }
}
</style>
