<template>
    <AuthController>
        <template #default="{ loginData, loginRules, sendLogin }">
          <AuthContainer>
            <template #title>Добро пожаловать в ON-DEVELOPER</template>
            <template #link>
              <nuxt-link class="link__login"  to="/authentication/login">Войти</nuxt-link>
              <nuxt-link class="link__registration" to="/authentication/registration">Регистрация</nuxt-link>
            </template>
            <template #form>
              <VeeForm  v-slot="{ errors, meta }" @submit="sendLogin" :validation-schema="loginRules">
                  <SharedInput name="email" v-model="loginData.email" type="text" :error="errors.email">Почта</SharedInput>
                  <SharedInput name="password" v-model="loginData.password" type="text" :error="errors.password">Пароль</SharedInput>
                  <SharedButton :disabled="meta.valid">Войти</SharedButton>
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
  
  .link {
    
    &__login {
      margin-right: var(--ident-xs);
      color: var(--color-blue);
      
    }

    &__registration {
      color: var(--color-black);
      text-decoration: none;
    }
  }

  .help__password {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    color: var(--color-blue);
    margin-bottom: var(--ident-xs);
  }
</style>
