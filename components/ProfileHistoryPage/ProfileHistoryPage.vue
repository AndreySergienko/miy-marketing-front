<template>
  <div :class="['profile-history-page', rootClass]">
    <span class="profile-history-page__number">{{ number }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IProfileHistoryPageProps } from "./ProfileHistoryPage.types";

const props = defineProps<IProfileHistoryPageProps>();
const { isActive, page } = toRefs(props);

const rootClass = computed(() => ({
  "profile-history-page--active": isActive.value,
}));

const number = computed(() => page.value || "...");
</script>

<style scoped lang="scss">
.profile-history-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  border-radius: var(--indent-s);
  border: 1px solid var(--color-light-gray);
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  cursor: pointer;

  &--active {
    border: 1px solid var(--color-blue);
    color: var(--color-blue);
    cursor: default;
    pointer-events: none;
  }
}
</style>
