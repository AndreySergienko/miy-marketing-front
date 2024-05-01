<template>
  <div class="auth">
    <div class="auth__inner">
      <h2 class="auth__title">Добро пожаловать в ON-DEVELOPER</h2>
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
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .auth {

    &__inner {
      
      @include media.media-breakpoint-down(l) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &__title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--ident-xm);
      width: 65%;

      @include media.media-breakpoint-down(l) {
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 55%;
      }


      @include media.media-breakpoint-down(sm) {
        margin-top: var(--ident-xxxl);
        text-align: center;
        font-size: var(--font-size-mx);
        width: 90%;
      }
    }

    &__link {
      display: flex;
      gap: var(--ident-xs);
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--ident-xs);

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