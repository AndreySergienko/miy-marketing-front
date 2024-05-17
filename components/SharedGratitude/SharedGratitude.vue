<template>
  <div :class="['gratitude', gratDisplay[display]]">
    <div class="gratitude__inner">
      <nuxt-icon class="gratitude__icon" name="message" filled/>
      <div class="gratitude__intro">
        <span class="gratitude__title">Благодарим Вас за регистрацию!</span>
        <span class="gratitude__text">На вашу почту  пришло письмо с просьбой потвердить регистрацию</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .gratitude {
    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--indent-2xl);
    }

    &__icon {
      font-size: 288px;
    }

    &__intro {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: var(--indent-3xl);
    }

    &__title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
    }

    &__text {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
    }
  }
</style>
<script setup lang="ts">
  import type { TGratDisplay } from './SharedGratitude.types';

  const gratDisplay: TGratDisplay = {
    display: 'gratitude__display'
  }
  const props = defineProps({
    display: String,
  })
</script>