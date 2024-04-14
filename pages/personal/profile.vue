<template>
  <div class="personal">
    <div class="container">
      <div class="personal__inner">
        <div class="personal__text">
          <h3 class="personal__title">Общая информация</h3>
          <div class="personal__form">
            <div class="personal__form-item">
              <span class="personal__form-name">Фио</span>
              <input class="personal__form-input" type="text">
            </div>
            <div class="personal__form-documention">
              <div class="personal__form-item">
                <span class="personal__form-name">ИНН</span>
                <input class="personal__form-input" type="number">
              </div>
              <div class="personal__form-item">
                <span class="personal__form-name">Email</span>
                <input class="personal__form-input" type="email">
              </div>
            </div>
          </div>
          <div class="personal__card">
            <div class="personal__card-inner">
              <h3 class="personal__card-title">Привязанная карта</h3>
              <div class="personal__card-form">
                <div class="personal__card-form__item">
                  <span class="personal__card-form__name">Номер карты</span>
                  <input class="personal__card-form__input" type="number">
                </div>
                <div class="personal__card-date">
                  <div class="personal__card-form__item">
                    <span class="personal__card-form__name">Дата</span>
                    <input class="personal__card-form__input" type="date">
                  </div>
                  <div class="personal__card-form__item">
                    <div class="personal__card-form__title">
                      <span class="personal__card-form__name">CCV/CVC</span>
                    </div>
                    <div class="personal__card-form__text">
                      <input class="personal__card-form__input" type="number">
                      <nuxt-icon class="personal__card-form__icon" name="password" filled/>
                    </div>

                  </div>
                </div>
                <div class="personal__card-form__item">
                  <span class="personal__card-form__name">Предпочтение модерации</span>
                  <input class="personal__card-form__input" type="number">
                </div>
              </div>
            </div>
          </div>
          <SharedButton class="personal__button" color="blue">Редактировать</SharedButton>
        </div>
        <NuxtImg class="personal__img" src="../public/Dragon.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'personal'
  })
</script>
<style lang="scss">
  .personal {
    position: relative;
    overflow: hidden;
    margin-top: var(--ident-xxxl);

    &__inner {
      display: flex;
    }

    &__img {
      position: absolute;
      z-index: -1;
      background-size: cover;
      width: 55%;
      top: 0;
      left: 925px;
    }

    &__text {
      width: 45%;
    }

    &__title {
      margin-bottom: var(--ident-xm);
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
    }

    &__form {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--ident-xm);

      &-documention {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      &-item {
        display: flex;
        flex-direction: column;
      }

      &-name {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);
      }

      &-input {
        margin-bottom: 24px;
        height: 50px;
        border: 1px solid var(--color-light-gray);
        border-radius: 12px;
      }
    }

    &__card {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--color-light-gray);
      border-radius: 24px;
      margin-bottom: var(--ident-xm);

      &-inner {
        padding: 24px;
      }

      &-title {
        font-size: var(--font-size-l);
        font-weight: var(--font-weight-semi-bold);
        margin-bottom: 18px;
      }

      &-form {
        display: flex;
        flex-direction: column;


        &__item {
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
        }

        &__title {
          margin-bottom: var(--ident-m);
        }

        &__text {
         display: flex;
         justify-content: space-between;
        }

        &__name {
          font-size: var(--font-size-m);
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--ident-m);
        }

        &__input {
          height: 50px;
          width: 100%;
          border: 1px solid var(--color-light-gray);
          border-radius: 12px;
          margin-right: var(--ident-m);
        }

        &__icon {
          font-size: 50px;
        }
      }

      &-date {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
      }
    }

    &__button {
      margin-bottom: 237px;
    }
  }
</style>
