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
            $route.path === '/personal/location'
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
  padding-top: var(--indent-4xl);

  &__inner {
    display: flex;
    gap: var(--indent-4xl);
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    @include media.media-breakpoint-down(sm) {
      flex-direction: column;
    }

    a {
      color: var(--color-black);
      text-decoration: none;
      &.active {
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-color: var(--color-blue);
      }
    }
  }
}
</style>
