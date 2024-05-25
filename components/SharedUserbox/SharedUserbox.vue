<template>
  <div class="user-box" @click="toPersonalProfile">
    <div class="user-box__inner">
      <nuxt-icon name="user" class="user-box__icon" filled />
      <div class="user-box__title">{{ user.fio }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">

  import type { ISharedUserboxProps } from './SharedUserbox.types';

  const props = defineProps<ISharedUserboxProps>()
</script>
<style scoped lang="scss">
  .user-box {
    cursor: pointer;
    border: 1px solid var(--color-light-gray);
    border-radius: 24px;
    margin-right: var(--indent-xl);

    &__inner {
      padding: var(--indent-m) var(--indent-l);
      display: flex;
      align-items: center;
      gap: var(--indent-xl);
    }

    &__icon {
      font-size: 28px;
    }

    &__title {
      font-size: var(--font-size-s);
    }
  }
</style>
