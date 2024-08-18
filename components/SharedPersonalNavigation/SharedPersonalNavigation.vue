<template>
  <div class="navigation container">
    <div class="navigation__inner">
      <nuxt-link
        :class="{
          active:
            $route.path === '/personal/profile'
        }"
        to="/personal/profile"
      >
        Мой профиль
      </nuxt-link>
      <nuxt-link
        :class="{
          active:
            $route.path === '/personal/telegram' ||
            $route.path.startsWith('/personal/location') ||
            $route.path === '/personal/connect'
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
  padding-top: var(--indent-4xl);

  @include media.media-breakpoint-down(sm) {
    padding-top: var(--indent-2xl) ;
  }

  &__inner {
    display: flex;
    gap: var(--indent-4xl);
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    @include media.media-breakpoint-down(sm) {
      flex-direction: column;
      gap: var(--indent-2xl);
      font-size: var(--font-size-s);
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
