<template>
  <AuthController>
    <template #default="{ registrationData, registrationRules, sendRegistration }">
      <AuthContainer v-show="!showGratitude" >
        <template #title>Логин</template>
        <template #form>
          <VeeForm class="form" v-slot="{ errors, meta }" @submit="sendRegistration" :validation-schema="registrationRules">
            <SharedInput name="fio" v-model="registrationData.name" type="text" :error="errors.fio">ФИО</SharedInput>
            <div class="form__item">
              <SharedInput name="uniqueBotId" v-model="registrationData.uniqueBotId" type="text" :error="errors.uniqueBotId">Уникальный id</SharedInput>
              <SharedInput name="inn" v-model="registrationData.inn" type="text" :error="errors.inn">ИНН</SharedInput>
              <SharedInput name="email" v-model="registrationData.email" type="text" :error="errors.email">Почта</SharedInput>
              <SharedInput name="password" v-model="registrationData.password" type="text" :error="errors.password">Пароль</SharedInput> 
            </div>
            <div class="form__checkbox">
              <span class="form__checkbox-title">Публикация рекламных постов в</span>
              <div class="form__checkbox-items">
                <SharedCheckbox>В уведомительном порядке</SharedCheckbox>
                <SharedCheckbox>В автоматическом порядке</SharedCheckbox>  
              </div>
              <div class="form__checkbox-confidential">
                <SharedCheckbox>Согласен на обработку персональных данных, получение рассылок, а также с <nuxt-link to="/confidential">Политикой конфиденциальности.</nuxt-link></SharedCheckbox> 
              </div>
            </div>
            <div class="btn__registration">
              <SharedButton size="l" color="blue" :disabled="!meta.valid" @click="useAuthStore.registration" >Войти</SharedButton>
            </div>
          </VeeForm>
        </template>
      </AuthContainer>
      <div v-show="showGratitude" class="gratitude">
        <SharedGratitude />
      </div>
    </template>
  </AuthController>
</template>

<script setup>
  import SharedCheckbox from '~/components/SharedCheckbox/SharedCheckbox.vue';
  import AuthController from '~/controllers/AuthController/AuthController.vue';
  import { useAuthStore } from '~/store/auth/auth.store';

 
  definePageMeta({
    layout: 'authentication'
  })

  const showGratitude = ref(false);

  const toggleContent = () => {
    showGratitude.value = !showGratitude.value
  }

</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--ident-l);

    @include media.media-breakpoint-down(l) {
      width: 100%;
      align-items: center;
    }

    &__item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--ident-l);

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
      gap: var(--ident-m);

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
        gap: var(--ident-m);
      }

      &-confidential {
        display: flex;
        align-items: center;
        font-size: var(--font-size-ss);
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