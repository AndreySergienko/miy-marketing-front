<template>
  <UserController>
    <template #default="{userData, userRules, sendUser}">
      <ProfileContainer>
        <template #form>
          <VeeForm v-slot="{errors,meta}" @submit="sendUser" :validation-schema="userRules">
            <div class="personal">
              <div class="container">
                <div class="personal__inner">
                  <div class="personal__intro">
                    <h3 class="personal__title">Общая информация</h3>
                    <div class="personal__form">
                      <SharedInput name="fio" v-model="userData.name" type="text" :error="errors.fio" >ФИО</SharedInput>
                      <div class="personal__form-item">
                        <SharedInput name="inn" v-model="userData.inn" type="text" :error="errors.inn"  >ИНН</SharedInput>
                        <SharedInput name="email" v-model="userData.email" type="text" :error="errors.email" >Почта</SharedInput>
                      </div>
                    </div>
                    <div class="personal__card">
                      <div class="personal__card-inner">
                        <h3 class="personal__card-title">Привязанная карта</h3>
                        <div class="personal__card-form">
                          <SharedInput name="card" type="number":error="errors.card" >Номер карты</SharedInput>
                        </div>
                      </div>
                    </div>
                    <SharedButton size="l" color="blue" class="personal__btn" :disabled="!meta.valid" @click="useUserStore.updateUser">Сохранить</SharedButton>
                  </div>
                </div>
              </div>
            </div>
          </VeeForm>
        </template>
      </ProfileContainer>
    </template>
  </UserController>
</template>

<script setup>
import UserController from '~/controllers/UserController/UserController.vue';
import {useUserStore} from '../../store/user/user.store';
  definePageMeta({
    layout: 'personal'
  })
</script>
<style lang="scss" scoped >
   @use 'assets/styles/media';
  .personal {
    position: relative;
    overflow: hidden;
    margin-top: var(--ident-xxxl);

    @include media.media-breakpoint-down(md) {
      width: 150vw;
    }

    @include media.media-breakpoint-down(sm) {
      width: 205vw;
    }

    &__inner {
      display: flex;
      gap: 95px;
    }

    &__intro {
      width: 45%;
    }

    &__title {
      margin-bottom: var(--ident-xm);
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-mx);
      }
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

        @include media.media-breakpoint-down(sm) {
          display: flex;
          flex-direction: column;
        }
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

        @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-ml);
      }
      }

      &-form {
        display: flex;
        gap: var(--ident-l);
        flex-direction: column;


        &__items {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--ident-l);

          @include media.media-breakpoint-down(sm) {
            display: flex;
            flex-direction: column;
            gap: var(--ident-m);
            width: 50vw;
          }
        }

        &__item {
          display: flex;
        }

        &__input__password {
          width: 100%;

          @include media.media-breakpoint-down(sm) {
            width: 20vw;
          }
        }
      }
    }

    &__icon {
      margin: var(--ident-xs) 0 0 var(--ident-m);
      padding: 0;
      box-sizing: border-box;
      font-size: 50px;

      @include media.media-breakpoint-down (sm) {
        margin: var(--ident-lx) 0 0 var(--ident-m);
      }
    }

    &__btn {
      padding: var(--ident-mx) var(--ident-xxls);
      margin-bottom: var(--ident-xxxl);
    }
  }
</style>
