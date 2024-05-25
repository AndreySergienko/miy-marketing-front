<template>
  <div class="bottom-item">
    <span class="bottom-item__title">{{ title }}</span>
    <span class="bottom-item__text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IBottomItemProps } from "./BottomItem.types";

defineProps<IBottomItemProps>();
</script>

<style scoped lang="scss">
.bottom-item {
  display: flex;
  flex-direction: column;
  gap: var(--indent-s);
  font-weight: var(--font-weight-medium);

  &__title {
    font-size: var(--font-size-m);
  }

  &__text {
    font-size: var(--font-size-s);
  }
}
</style>
