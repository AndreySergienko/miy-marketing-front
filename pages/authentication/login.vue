<template>
    <AuthController>
        <template #default="{ loginData, loginRules, sendLogin, isLoading }">
          <AuthContainer>
            <template #form>
                <VeeForm class="form" v-slot="{ errors, meta }" :validation-schema="loginRules">
                  <div class="form__input">
                    <SharedInput name="email" v-model="loginData.email" type="text" :error="errors.email">Почта</SharedInput>
                    <SharedInput name="password" v-model="loginData.password" type="text" :error="errors.password">Пароль</SharedInput>
                  </div>
                  <div class="help__password">
                    <span>Забыли пароль</span>
                    <NuxtIcon name="lock" filled/>
                  </div>
                  <div class="btn__login">
                    <SharedButton color="blue" size="l" :is-disabled="!meta.valid" @click="sendLogin" :is-loading="isLoading">Войти</SharedButton >
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
    gap: var(--indent-l);

    @include media.media-breakpoint-down(l){
      width: 100%;
    }

    &__input {
      display: flex;
      flex-direction: column;
      gap: var(--indent-xl);
    }
  }

  .help__password {
    display: flex;
    align-items: center;
    gap: var(--indent-m);
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    color: var(--color-blue);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-s);
    }
  }
</style>
