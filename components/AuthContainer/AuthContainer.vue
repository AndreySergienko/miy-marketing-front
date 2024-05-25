<template>
  <div class="auth">
    <div class="container">
      <div class="auth__inner">
        <h2 class="auth__title">Добро пожаловать <br> в ON-DEVELOPER</h2>
        <div class="auth__link">
          <nuxt-link
            to="/authentication/login"
            :class="{active: $route.path === '/authentication/login'}"
          >
            Войти
          </nuxt-link>
          <nuxt-link
            to="/authentication/registration"
            :class="{active: $route.path === '/authentication/registration'}"
          >
            Регистрация
          </nuxt-link>
        </div>
        <div class="auth__form"><slot name="form" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .auth {
    &__inner {
      padding: 0 71px;

      @include media.media-breakpoint-down(l) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }
    }

    &__title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--indent-2xl);

      @include media.media-breakpoint-down(l) {
        text-align: center;
        justify-content: center;
        align-items: center;
      }

      @include media.media-breakpoint-down(sm) {
        font-size: 30px;
      }
    }

    &__link {
      display: flex;
      gap: var(--indent-3xl);
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--indent-3xl);

      @include media.media-breakpoint-down(l) {
        justify-content: center;
      }

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-s);
      }

      a {

        &.active {
        color: var(--color-blue);
        text-underline-offset: 10px;
        }

        &:not(.active) {
          color: var(--color-black);
          text-decoration: none;
        }
      }
    }

    &__form {
      @include media.media-breakpoint-down(l) {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
