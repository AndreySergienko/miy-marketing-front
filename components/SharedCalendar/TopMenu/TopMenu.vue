<template>
  <div class="top-menu">
    <span class="top-menu__title">{{ title }}</span>
    <div class="top-menu__arrows">
      <NuxtIcon
        :class="['top-menu__arrows-left', leftClass]"
        name="calendar-arrow"
        @click="$emit('prev')"
      />
      <NuxtIcon
        :class="['top-menu__arrows-right', rightClass]"
        name="calendar-arrow"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITopMenuEmits, ITopMenuProps } from "./TopMenu.types";

const props = defineProps<ITopMenuProps>();
const { isPrevDisabled, isNextDisabled } = toRefs(props);

defineEmits<ITopMenuEmits>();

const leftClass = computed(() => ({
  "top-menu__arrows-left--disabled": isPrevDisabled.value,
}));

const rightClass = computed(() => ({
  "top-menu__arrows-right--disabled": isNextDisabled.value,
}));
</script>

<style lang="scss" scoped>
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
  }

  &__arrows {
    display: flex;
    align-items: center;
    gap: var(--indent-s);

    &-left,
    &-right {
      cursor: pointer;
      width: 46px;
      height: 46px;
      transition: 0.3s opacity ease-in-out;

      :deep(svg) {
        width: 100%;
        height: 100%;
      }

      &--disabled {
        opacity: 0.3;
        pointer-events: none;
      }
    }

    &-left {
      rotate: 180deg;
    }
  }
}
</style>
