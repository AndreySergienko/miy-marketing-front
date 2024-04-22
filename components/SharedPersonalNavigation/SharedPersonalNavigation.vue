<template>
  <div class="navigation">
    <div class="container">
      <div class="navigation__inner">
        <nuxt-link :class="{active: $route.path === '/personal/profile'}" to="/personal/profile">Мой профиль</nuxt-link>
        <nuxt-link :class="{active: $route.path === '/personal/telegram'}" to="/personal/telegram">Размещение Тг-каналов</nuxt-link>
        <nuxt-link :class="{active: $route.path === '/personal/history'}" to="/personal/history">История операций</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .navigation {
    border-top: 1px solid var(--color-light-gray);
    padding-top: var(--ident-xxl);

    &__inner {
      display: flex;
      gap: var(--ident-xxl);
      font-size: var(--font-size-ml);
      font-weight: var(--font-weight-medium);

      a {

        &.active {
          color: var(--color-blue);
        }

        &:not(.active) {
          color: var(--color-black);
          text-decoration: none;
        }
      }
    }
  }
</style>