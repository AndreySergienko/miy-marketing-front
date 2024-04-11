<template>
  <div class="main">
    <div class="auth">
      <div class="auth__inner">
        <div class="auth__intro">
          <div class="auth__text">
            <h3 class="auth__title">Добро пожаловать в ON DEVELOPER</h3>
            <div class="auth__form">
              <div class="auth__link">
                <nuxt-link class="auth__link-login" to="/authentication/auth">Войти</nuxt-link>
                <nuxt-link class="auth__link-registration" to="/authentication/registration">Регистрация</nuxt-link>
              </div>
              <div class="auth__input">
                <div class="auth__input-item">
                  <SharedInput>Email</SharedInput>
                </div>
                <div class="auth__input-item">
                  <SharedInput>Пароль</SharedInput>
                  <div class="auth__error">
                    <span class="auth__error-text">Забыл пароль</span>
                    <nuxt-icon class="auth__error-icon" name="lock" filled></nuxt-icon>
                  </div>  
                </div>
              </div>
              <SharedButton color="blueBold">Войти</SharedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SharedButton from '~/components/SharedButtons/SharedButton.vue';

  definePageMeta({
    layout: 'authentication'
  })
</script>

<style lang="scss" scoped>
  
  .auth {
    position: relative;

    &__inner {
      display: flex;
      justify-content: flex-end;
    }

    &__intro {
      border-radius: 25px 0px 0px 25px;
      background-color: var(--color-white);
      width: 50%;
      height: 854px;
    }

    &__text {
      padding: 155px 86px;
    }

    &__title {
      width: 60%;
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--ident-xm);
    }

    &__form {
      display: flex;
      flex-direction: column;
    }

    &__link {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--ident-xs);

      &-login {
        margin-right: var(--ident-xs);
        color: var(--color-blue);
      }

      &-registration {
        color: var(--color-black);
        text-decoration: none;
      }
    }

    &__input {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-item {
        width: 500px;
      }
    }

    &__error {
      margin: var(--ident-xs) 0px;

      &-text {
        font-size: var(--font-size-s);
        font-weight: var(--font-weight-medium);
        color: var(--color-blue);
        margin-right: var(--ident-m);
      }
    }
  } 
</style>