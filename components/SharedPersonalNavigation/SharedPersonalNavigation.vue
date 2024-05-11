<template>
  <div class="navigation container">
    <div class="navigation__inner">
      <nuxt-link
        :class="{
          active:
            $route.path === '/personal/profile' ||
            $route.path === '/personal/connect',
        }"
        to="/personal/profile"
      >
        Мой профиль
      </nuxt-link>
      <nuxt-link
        :class="{
          active:
            $route.path === '/personal/telegram' ||
            $route.path === '/personal/location',
        }"
        to="/personal/telegram"
      >
        Размещение TG-каналов
      </nuxt-link>
      <nuxt-link
        :class="{ active: $route.path === '/personal/history' }"
        to="/personal/history"
      >
        История операций
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/media";

.navigation {
  border-top: 1px solid var(--color-light-gray);
  padding-top: var(--ident-xxl);

  &__inner {
    display: flex;
    gap: var(--ident-xxl);
    font-size: var(--font-size-ml);
    font-weight: var(--font-weight-medium);

    @include media.media-breakpoint-down(sm) {
      flex-direction: column;
    }

    a {
      text-decoration: none;
      padding-bottom: 8px;
      color: var(--color-black);

      &.active {
        border-bottom: 2px solid var(--color-blue);
      }
    }
  }
}
</style>
