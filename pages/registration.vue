<template>
  <div class="main">
    <div class="registration">
      <div class="registration__inner">
        <div class="registration__logo">
          <NuxtImg class="registration__img" src="../public/DragonAuth.png" />
        </div>
        <div class="registration__intro">
          <div class="registration__text">
            <h3 class="registration__title">Добро пожаловать в ON DEVELOPER</h3>
            <div class="registration__form">
              <div class="registration__link">
                <nuxt-link class="registration__link-login" to="/auth">Войти</nuxt-link>
                <nuxt-link class="registration__link-registration" to="/registration">Регистрация</nuxt-link>
              </div>
              <div class="registration__input">
                <span class="registration__input-title">ФИО</span>
                <input class="registration__input-text" type="text">
                <div class="registration__input-items">
                  <div class="registration__input-item">
                    <span class="registration__input-item__title">Уникальный id
                      <nuxt-icon name="question" filled/>
                    </span>
                    <input class="registration__input-item__text" type="text">
                  </div>
                  <div class="registration__input-item">
                    <span class="registration__input-item__title">ИНН</span>
                    <input class="registration__input-item__text" type="text">
                  </div>
                  <div class="registration__input-item">
                    <span class="registration__input-item__title">Email</span>
                    <input class="registration__input-item__text" type="email">
                  </div>
                  <div class="registration__input-item">
                    <span class="registration__input-item__title">Пароль</span>
                    <input class="registration__input-item__text" type="password">
                  </div>  
                </div>
                <div class="registration__checkbox">
                  <span class="registration__checkbox-title">Работа публикации в группе</span>
                  <div class="registration__checkbox-order">
                    <div class="redistration__checkbox-order__item">
                      <input class="checkbox" type="checkbox">В увидомительном порядке
                    </div>
                    <div class="redistration__checkbox-order__item">
                      <input class="checkbox" type="checkbox"> В автоматическом порядке
                    </div>
                  </div>
                  <input class="checkbox" type="checkbox">Согласен на обработку персональных данных, получение рассылок, а также с <nuxt-link to="/confidential">Политикой конфиденциальности</nuxt-link>
                </div>
                <button class="registration__button">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .registration {
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
      padding: 65px 86px;
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
        color: var(--color-black);
        text-decoration: none;
      }

      &-registration {
        color: var(--color-blue);
      }
    }

    &__input {
      display: flex;
      flex-direction: column;

      &-title {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);
        margin-bottom: var(--ident-m);
      }

      &-text {
        height: 50px;
        border: 1px solid var(--color-light-gray);
        border-radius: 12px;
        margin-bottom: var(--ident-l);
      }

      &-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);
        margin-bottom: var(--ident-l);
      }
      &-item {
        display: flex;
        flex-direction: column;

        &__title {
          margin-bottom: var(--ident-m);
        }

        &__text {
          height: 50px;
          border: 1px solid var(--color-light-gray);
          border-radius: 12px;
        }
      }
    }

    &__checkbox {
      margin-bottom: var(--ident-xs);

      font-size: 14px;
      font-weight: var(--font-weight-medium);

      &-title {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);
      }

      &-order {
        margin: 8px 0px var(--ident-xs) 0px;
        display: flex;
        gap: 220px;

        &__item {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    &__button {
      padding: 16px 214px;
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