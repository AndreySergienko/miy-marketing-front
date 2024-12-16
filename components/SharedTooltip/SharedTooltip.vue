<template>
  <div :class="['shared-tooltip', rootClass]" :style="style">{{ text }}</div>
</template>

<script setup lang="ts">
import type { ISharedTooltipProps } from "./SharedTooltip.types";

const props = defineProps<ISharedTooltipProps>();
const { isActive, borderColor } = toRefs(props);

const rootClass = computed(() => ({
  "shared-tooltip--active": isActive.value,
}));

const style = computed(() => ({
  "--border-color": borderColor.value,
}));
</script>

<style scoped lang="scss">
@use 'assets/styles/media';

.shared-tooltip {
  padding: var(--indent-m);
  width: max-content;
  position: absolute;
  z-index: 2;
  left: 13px;
  opacity: 0;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 4px 4px 5px 0 #0000000d;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-medium);
  background: rgba(0, 0, 0, 0.6);
  color: var(--color-white);
  box-sizing: border-box;
  transition: opacity 0.3s ease;

  &--active {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  @include media.media-breakpoint-down(sm) {
    width: auto;
    font-size: var(--font-size-s);
  }
}
</style>

