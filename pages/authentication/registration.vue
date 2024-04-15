<template>
  <div class="main">
    <div class="registration">
      <div class="registration__inner">
        <div class="registration__intro">
          <div class="registration__text">
            <h3 class="registration__title">Добро пожаловать в ON DEVELOPER</h3>
            <div class="registration__form">
              <div class="registration__link">
                <nuxt-link class="registration__link-login" to="/authentication/login">Войти</nuxt-link>
                <nuxt-link class="registration__link-registration" to="/authentication/registration">Регистрация</nuxt-link>
              </div>
              <div class="registration__input">
                <SharedInput> ФИО </SharedInput>
                <div class="registration__input-items">
                  <SharedInput> Уникальный id 
                    <nuxt-icon class="registration__icon" name="question" filled/>
                    <div class="registration__icon-subtitle">
                      <div class="registration__icon-subtitle__inner">
                        <span class="registration__icon-subtitle__title">Уникальный id</span>
                        <div class="registration__icon-subtitle__text">
                          Вы сможете получить уникальный id через нашего
                          <nuxt-link to="/">тг бота</nuxt-link>. Для начала напишите в строке “/start”. 
                          Убедительная просьба использовать один аккаунт при получении id и при будущеи осуществлении рекламы. 
                          В обязательно порядке при размещении рекламы в тг каналах вы должны быть админом.
                        </div>
                      </div>
                    </div>  
                  </SharedInput>
                  <SharedInput> ИНН </SharedInput>
                  <SharedInput> Email </SharedInput>
                  <SharedInput> Пароль </SharedInput> 
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
                <SharedButton color="blueBold">Войти</SharedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SharedButton from '~/components/SharedButton/SharedButton.vue';

  definePageMeta({
    layout: 'authentication'
  })
</script>

<style lang="scss" scoped>
  .registration {
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
      gap: 16px;

      &-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        
      }
    }

    &__icon {
      &-subtitle {
        position: absolute;
        transform: translateX(-50%);
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s;
        background-color: var(--color-white);
        border: 1px solid var(--color-light-gray);
        border-radius: 24px;
        width: 480px;
        right: 0;

        &__inner {
          padding: var(--ident-l);
          display: flex;
          flex-direction: column;
          font-size: 14px;
          font-weight: var(--font-weight-medium);
        }

        &__title {
          font-size: var(--font-size-s);
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--ident-m);
        }

        &.active {
          visibility: visible;
          opacity: 1;
        }
      }
      &:hover + &-subtitle {
        visibility: visible;
        opacity: 1;
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
  }

  
</style>