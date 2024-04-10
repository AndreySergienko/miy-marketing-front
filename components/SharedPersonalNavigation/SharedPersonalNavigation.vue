<template>
  <div class="navigation">
    <div class="container">
      <div class="navigation__inner">
        <nuxt-link class="navigation__item" to="">Мой профиль</nuxt-link>
        <nuxt-link class="navigation__item" to="">Размещение Тг-каналов</nuxt-link>
        <nuxt-link class="navigation__item" to="">История операций</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .navigation {
    border-top: 1px solid var(--color-light-gray);
    padding-top: 64px;

    &__inner {
      display: flex;
      gap: 64px;
    }

    &__item {
      font-size: 24px;
      font-weight: var(--font-weight-medium);
    }
    &__item:first-child {
      text-decoration: underline var(--color-blue);
    }
  }
</style>