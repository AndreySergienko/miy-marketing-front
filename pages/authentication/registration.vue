<template>
  <AuthController>
    <template #default="{ registrationData, registrationRules, sendRegistration }">
      <AuthContainer v-show="!showGratitude" >
        <template #title>Логин</template>
        <template #form>
          <VeeForm class="form" v-slot="{ errors, meta }" @submit="sendRegistration" :validation-schema="registrationRules">
            <SharedInput name="name" v-model="registrationData.name" type="text" :error="errors.name">ФИО</SharedInput>
            <div class="form__item">
              <SharedInput name="uniqueBotId" v-model="registrationData.uniqueBotId" type="text" :error="errors.uniqueBotId">Уникальный id</SharedInput>
              <SharedInput name="inn" v-model="registrationData.inn" type="text" :error="errors.inn">ИНН</SharedInput>
              <SharedInput name="email" v-model="registrationData.email" type="text" :error="errors.email">Почта</SharedInput>
              <SharedInput name="password" v-model="registrationData.password" type="text" :error="errors.password">Пароль</SharedInput> 
            </div>
            <div class="form__checkbox">
              <span class="form__checkbox-title">Публикация рекламных постов в</span>
              <div class="form__checkbox-items">
                <div class="form__checkbox-item">
                  <input type="checkbox"> В уведомительном порядке
                </div>
                <div class="form__checkbox-item">
                  <input type="checkbox"> В автоматическом порядке
                </div>
              </div>
              <div class="form__checkbox-confidential">
                <input type="checkbox"> Согласен на обработку персональных данных, получение рассылок, а также с <nuxt-link to="/confidential">Политикой конфиденциальности</nuxt-link>.
              </div>
            </div>
            <div class="btn__registration">
              <SharedButton size="l" color="blue" :disabled="!meta.valid" @click="toggleContent" >Войти</SharedButton>
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
  import AuthController from '~/controllers/AuthController/AuthController.vue';

 
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

    &__item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--ident-l);

      @include media.media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
      }
    }

    &__checkbox {
      display: flex;
      flex-direction: column;
      gap: var(--ident-m);

      &-title {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }
      }

      &-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ident-m);
      }

      &-item {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);

        @include media.media-breakpoint-down(sm) {
          display: flex;
          align-items: flex-start;
          font-size: var(--font-size-ss);
        }

        &:not(:last-child) {
          margin-bottom: var(--ident-l);
        }
      }
      &-confidential {
        font-size: var(--font-size-ss);
        font-weight: var(--font-weight-medium);
      }
    }
  }
</style>