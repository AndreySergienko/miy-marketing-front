<template>
  <div class="main">
    <div class="auth">
      <div class="auth__inner">
        <div class="auth__logo">
           <NuxtImg class="auth__img" src="../public/DragonAuth.png" /> 
        </div>
        <div class="auth__intro">
          <div class="auth__text">
            <h3 class="auth__title">Добро пожаловать в ON DEVELOPER</h3>
            <div class="auth__form">
              <div class="auth__link">
                <nuxt-link class="auth__link-login" to="/auth">Войти</nuxt-link>
                <nuxt-link class="auth__link-registration" to="/registration">Регистрация</nuxt-link>
              </div>
              <div class="auth__input">
                <div class="auth__input-item">
                  <span class="auth__input-item__title">Email</span>
                  <input class="auth__input-item__text" type="email">
                </div>
                <div class="auth__input-item">
                  <span class="auth__input-item__title">пароль</span>
                  <input class="auth__input-item__text" type="password">
                  <div class="auth__error">
                    <span class="auth__error-text">Забыли пароль</span>
                    <nuxt-icon class="auth__error-icon" name="lock" filled></nuxt-icon>
                  </div>  
                </div>
                <button class="auth__button">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
  .auth {
    position: relative;

    &__inner {
      display: flex;
      justify-content: flex-end;
    }

    &__logo {
      position: absolute;
      background-color: var(--color-blue);
      z-index: -1;
      width: 1920px;
      height: 854px;
    }

    &__img {
      width: 50%;
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

      &-item {
        display: flex;
        flex-direction: column;
        margin-bottom: var(--ident-l);

        &__title {
          margin-bottom: var(--ident-m);

          font-size: var(--font-size-m);
          font-weight: var(--font-weight-medium);
        }

        &__text {
          height: 50px;
          width: 500px;
          border: 1px solid var(--color-light-gray);
          border-radius: 12px;
        }
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

    &__button {
      padding: 16px 212px;
      width: 500px;

      font-size: 24px;
      font-weight: var(--font-weight-semi-bold);
      color: var(--color-white);
      background-color: var(--color-blue);
      border: 1px solid transparent;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }
  } 
</style>