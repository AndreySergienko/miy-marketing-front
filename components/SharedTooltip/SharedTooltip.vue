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
  position: absolute;
  z-index: 2;
  left: 13px;
  display: none;
  border: 1px solid var(--color-blue);
  box-shadow: 4px 4px 5px 0 #0000000d;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  background: #fff;
  color: var(--color-black);
  box-sizing: border-box;

  &--active {
    display: flex;
  }
  @include media.media-breakpoint-down(sm) {
    font-size: var(--font-size-s);
  }
}
</style>
