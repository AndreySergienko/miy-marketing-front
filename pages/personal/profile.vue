<template>
  <UserController>
    <template #default="{ userData, userRules, sendUser, isLoading }">
      <ProfileContainer>
        <template #form>
          <VeeForm
            v-slot="{ errors, meta }"
            @submit="sendUser"
            :validation-schema="userRules"
          >
            <div class="personal">
              <div class="container">
                <div class="personal__inner">
                  <div class="personal__intro">
                    <h3 class="personal__title">Общая информация</h3>
                    <div class="personal__form">
                      <SharedInput
                        name="fio"
                        v-model="userData.fio"
                        type="text"
                        :error="errors.fio"
                      >
                        ФИО
                      </SharedInput>
                      <div class="personal__form-item">
                        <SharedInput
                          name="inn"
                          v-model="userData.inn"
                          type="number"
                          :error="errors.inn"
                        >
                          ИНН
                        </SharedInput>
                        <SharedInput
                          name="email"
                          v-model="userData.email"
                          type="text"
                          :error="errors.email"
                        >
                          Почта
                        </SharedInput>
                      </div>
                    </div>
                    <div class="personal__card">
                      <div class="personal__card-inner">
                        <h3 class="personal__card-title">Привязанная карта</h3>
                        <div class="personal__card-form">
                          <SharedInput
                            name="card"
                            v-model="userData.cardNumber"
                            type="text"
                            :error="errors.cardNumber"
                          >
                            Номер карты
                          </SharedInput>
                        </div>
                      </div>
                    </div>
                    <SharedButton
                      size="l"
                      color="blue"
                      class="personal__btn"
                      :disabled="!meta.valid"
                      :is-loading="isLoading"
                      @click="sendUser"
                    >
                      Сохранить
                    </SharedButton>
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
import {useUserStore} from '~/store/user/user.store';
  definePageMeta({
    layout: 'personal'
  })
</script>

<style lang="scss" scoped>
@use "assets/styles/media";

.personal {
  position: relative;
  overflow: hidden;
  margin-top: var(--indent-3xl);

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
    margin-bottom: var(--indent-2xl);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semi-bold);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-l);
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: var(--indent-3xl);
    margin-bottom: var(--indent-2xl);

    &-item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--indent-3xl);
      margin-bottom: var(--indent-2xl);

      @include media.media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--indent-2xl);

    &-title {
      font-size: var(--font-size-l);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--indent-l);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-m);
      }
    }

    &-form {
      display: flex;
      gap: var(--indent-l);
      flex-direction: column;

      &__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--indent-l);

        @include media.media-breakpoint-down(sm) {
          display: flex;
          flex-direction: column;
          gap: var(--indent-s);
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
    margin: var(--indent-3xl) 0 0 var(--indent-s);
    padding: 0;
    box-sizing: border-box;
    font-size: 50px;

    @include media.media-breakpoint-down(sm) {
      margin: var(--indent-l) 0 0 var(--indent-s);
    }
  }

  &__btn {
    padding: var(--indent-m) var(--indent-5xl);
    margin-bottom: var(--indent-5xl);
  }
}
</style>
