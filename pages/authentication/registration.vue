<template>
  <AuthController>
    <template #default="{ isShowGratitude, registrationData, registrationRules, sendRegistration, isLoading }">
      <AuthContainer v-if="!isShowGratitude" >
        <template #form>
          <VeeForm class="form" v-slot="{ errors, meta }" :validation-schema="registrationRules">
            <SharedInput name="fio" v-model="registrationData.fio" type="text" :error="errors.fio">ФИО</SharedInput>
            <div class="form__item">
              <SharedInput name="uniqueBotId" v-model="registrationData.uniqueBotId" type="text" :error="errors.uniqueBotId">Уникальный id
                <SharedIdbot />
              </SharedInput>
              <SharedInput name="inn" v-model="registrationData.inn" type="number" :error="errors.inn">ИНН</SharedInput>
              <SharedInput name="email" v-model="registrationData.email" type="text" :error="errors.email">Почта</SharedInput>
              <SharedInput name="password" v-model="registrationData.password" type="text" :error="errors.password">Пароль</SharedInput>
            </div>
            <div class="form__checkbox">
              <span class="form__checkbox-title">Публикация рекламных постов в</span>
              <div class="form__checkbox-items">
                <SharedGroupRadio v-model="registrationData.isNotification">
                    <template #default="{ updateValue }">
                      <SharedRadio v-for="radio in radios" :checked="radio.checked" name="notification" :key="radio.text" :value="radio.value" @change="updateValue">{{ radio.text }}</SharedRadio>
                    </template>
                </SharedGroupRadio>
              </div>
              <div class="form__checkbox-confidential">
                <SharedCheckbox v-model="isChecked">Согласен на обработку персональных данных, получение рассылок, а также с <nuxt-link to="/confidential">Политикой конфиденциальности.</nuxt-link></SharedCheckbox>
              </div>
            </div>
            <div class="btn__registration">
              <SharedButton size="l" color="blue" :disabled="!meta.valid || !isChecked" @click="sendRegistration" :is-loading="isLoading">Создать</SharedButton>
            </div>
          </VeeForm>
        </template>
      </AuthContainer>
      <div v-else class="gratitude">
        <SharedGratitude />
      </div>
    </template>
  </AuthController>
</template>

<script setup lang="ts">
  import AuthController from '~/controllers/AuthController/AuthController.vue';
  import {radios} from "~/modules/pages/registration/registration.data";

  definePageMeta({
    layout: 'authentication'
  })

  const isChecked = ref(false)
</script>

<style lang="scss" scoped>
@use 'assets/styles/media';

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--indent-xl);

    @include media.media-breakpoint-down(l) {
      align-items: center;
    }

    &__item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--indent-l);

      @include media.media-breakpoint-down(l) {
        width: 100%;
      }

      @include media.media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
      }
    }

    &__checkbox {
      display: flex;
      flex-direction: column;
      gap: var(--indent-m);

      @include media.media-breakpoint-down(l) {
        width: 100%;
      }

      &-title {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }
      }

      &-items {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--indent-s);
      }

      &-confidential {
        display: flex;
        align-items: center;
        font-size: var(--font-size-s);
        font-weight: var(--font-weight-medium);
      }
    }
  }

  .gratitude {
    margin-left: 2vw;

    @include media.media-breakpoint-down(l) {
      margin-left: 15vw;
    }

    @include media.media-breakpoint-down(sm) {
      margin-left: 1vw
    }
  }
</style>
