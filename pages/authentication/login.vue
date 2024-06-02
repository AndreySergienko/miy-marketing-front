<template>
    <AuthController>
        <template #default="{ loginData, loginRules, sendLogin, isLoading }">
          <AuthContainer>
            <template #form>
                <VeeForm class="form" v-slot="{ errors, meta }" :validation-schema="loginRules">
                  <div class="form__input">
                    <SharedInput name="email" v-model="loginData.email" type="text" :error="errors.email">Почта</SharedInput>
                    <div class="form__password">
                      <SharedInput name="password" v-model="loginData.password" :type="showPassword ? 'text' : 'password'" :error="errors.password">Пароль
                        <template #icon>
                          <nuxt-icon v-if="showPassword" name="eye-off" @click="showPassword = !showPassword"></nuxt-icon>
                          <nuxt-icon v-else name="eye" @click="showPassword = !showPassword"></nuxt-icon>
                        </template>
                      </SharedInput>
                    </div>
                  </div>
                  <div class="help__password">
                    <span>Забыли пароль</span>
                    <NuxtIcon name="lock" filled/>
                  </div>
                  <div class="btn__login">
                    <SharedButton color="blue" size="l" :is-disabled="!meta.valid || isLoading" @click="sendLogin" :is-loading="isLoading">Войти</SharedButton >
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
 const showPassword =ref(false)


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
