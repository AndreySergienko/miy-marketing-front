<template>
  <div class="navigation">
    <div class="container">
      <div class="navigation__inner">
        <nuxt-link :class="{active: $route.path === '/personal/profile'}" to="/personal/profile">Мой профиль</nuxt-link>
        <nuxt-link :class="{active: $route.path === '/personal/telegram' || $route.path === '/personal/location'}" to="/personal/telegram">Размещение Тг-каналов</nuxt-link>
        <nuxt-link :class="{active: $route.path === '/personal/history'}" to="/personal/history">История операций</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 @use 'assets/styles/media';
  .navigation {
    border-top: 1px solid var(--color-light-gray);
    padding-top: var(--ident-xxl);

    &__inner {
      display: flex;
      gap: var(--ident-xxl);
      font-size: var(--font-size-ml);
      font-weight: var(--font-weight-medium);
      padding: 0 var(--ident-lm);

      @include media.media-breakpoint-down (sm) {
        flex-direction: column;
      }

      a {

        &.active {
          color: var(--color-black);
          text-decoration-color: var(--color-blue);
          text-underline-offset: 10px;
        }

        &:not(.active) {
          color: var(--color-black);
          text-decoration: none;
        }
      }
    }
  }
</style>