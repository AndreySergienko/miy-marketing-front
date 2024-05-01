<template>
    <AuthController>
        <template #default="{ loginData, loginRules, sendLogin }">
          <AuthContainer>
            <template #form>
                <VeeForm class="form" v-slot="{ errors, meta }" @submit="sendLogin" :validation-schema="loginRules">
                  <div class="form__input">
                    <SharedInput name="email" v-model="loginData.email" type="text" :error="errors.email">Почта</SharedInput>
                    <SharedInput name="password" v-model="loginData.password" type="text" :error="errors.password">Пароль</SharedInput>
                  </div>
                  <div class="help__password">
                    <span>Забыл Пароль</span>
                    <NuxtIcon name="lock" filled/>
                  </div>
                  <div class="btn__login">
                    <SharedButton color="blue" size="l" :disabled="!meta.valid">Войти</SharedButton >
                  </div>
                </VeeForm>
            </template>
          </AuthContainer>
        </template>
    </AuthController>
</template>

<script setup lang="ts">
import AuthController from "~/controllers/AuthController/AuthController.vue";

definePageMeta({
    layout: 'authentication'
})
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--ident-xs);
    width: 70%;

    @include media.media-breakpoint-down(l){
      width: 100%;
    }

    &__input {
      display: flex;
      flex-direction: column;
      gap: var(--ident-xm);
    }
  }

  .help__password {
    display: flex;
    align-items: center;
    gap: var(--ident-ml);
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    color: var(--color-blue);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-sm);
    }
  }
</style> 
