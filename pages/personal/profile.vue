<template>
  <div class="personal">
    <div class="container">
      <div class="personal__inner">
        <div class="personal__intro">
          <h3 class="personal__title">Общая информация</h3>
          <div class="personal__form">
            <SharedInput>ФИО</SharedInput>
            <div class="personal__form-item">
              <SharedInput>ИНН</SharedInput>
              <SharedInput>Почта</SharedInput>
            </div>
          </div>
          <div class="personal__card">
            <div class="personal__card-inner">
              <h3 class="personal__card-title">Привязанная карта</h3>
              <div class="personal__card-form">
                <SharedInput>Номер карты</SharedInput>
                <div class="personal__card-form__items">
                  <SharedInput>Дата</SharedInput>
                  <div class="personal__card-form__item">
                    <SharedInput class=" personal__card-form__input__password">CCV/CVC</SharedInput>
                    <nuxt-icon class="personal__icon" name="password" filled/>
                  </div>
                </div>
                <SharedInput>Предпочтение модерации</SharedInput>
              </div>
            </div>
          </div>
          <SharedButton class="personal__button" size="m" color="blue">Редактировать</SharedButton>
        </div>
        <div class="personal__img"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'personal'
  })
</script>
<style lang="scss" scoped >
  .personal {
    position: relative;
    overflow: hidden;
    margin-top: var(--ident-xxxl);

    &__inner {
      display: flex;
      gap: 95px;
    }

    &__img {
      position: absolute;
      background: url(../../public/Dragon.png) no-repeat;
      width: 100%;
      height: 100%;
      left: 925px;
    }

    &__intro {
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
      gap: var(--ident-xs);
      margin-bottom: var(--ident-xm);

      &-item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ident-xs);
        margin-bottom: var(--ident-xm);
      } 
    }

    &__card {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--color-light-gray);
      border-radius: 24px;
      margin-bottom: var(--ident-xm);

      &-inner {
        padding: var(--ident-xs);
      }

      &-title {
        font-size: var(--font-size-l);
        font-weight: var(--font-weight-semi-bold);
        margin-bottom: var(--ident-l);
      }

      &-form {
        display: flex;
        gap: var(--ident-l);
        flex-direction: column;


        &__items {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--ident-l);
        }

        &__item {
          display: flex;
        }

        &__input__password {
          width: 100%;
        }
      }
    }

    &__icon {
      margin: var(--ident-xs) 0 0 var(--ident-m);
      padding: 0;
      box-sizing: border-box;
      font-size: 50px;
    }

    &__button {
      border-radius: 13px;
      margin-bottom: var(--ident-xxxl);
    }
  }
</style>
