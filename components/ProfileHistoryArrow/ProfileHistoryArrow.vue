<template>
  <div :class="['profile-history-arrow', rootClass]">
    <NuxtIcon
      class="profile-history-arrow__icon"
      name="pagination-arrow"
      filled
    />
  </div>
</template>

<script setup lang="ts">
import type { IProfileHistoryArrowProps } from "./ProfileHistoryArrow.types";

const props = defineProps<IProfileHistoryArrowProps>();
const { isDisabled, isInversed } = toRefs(props);

const rootClass = computed(() => ({
  "profile-history-arrow--disabled": isDisabled.value,
  "profile-history-arrow--inverse": isInversed.value,
}));
</script>

<style scoped lang="scss">
.profile-history-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  border-radius: var(--indent-s);
  border: 1px solid var(--color-light-gray);
  cursor: pointer;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;

    :deep(svg) {
      width: 100%;
      height: 100%;

      path {
        stroke: var(--color-light-gray);
      }
    }
  }

  &--disabled {
    background: var(--color-light-gray);
    pointer-events: none;

    .profile-history-arrow__icon {
      :deep(svg) {
        path {
          stroke: var(--color-white);
        }
      }
    }
  }

  &--inverse {
    transform: rotate(180deg);
  }
}
</style>
