<template>
    <AuthController ref="$authController">
        <template #default="{ login, sendLogin }">
          <AuthContainer>
            <template #title>Добро пожаловать в ON-DEVELOPER</template>
            <template #link>
              <nuxt-link class="link__login"  to="/authentication/login">Войти</nuxt-link>
              <nuxt-link class="link__registration" to="/authentication/registration">Регистрация</nuxt-link>
            </template>
            <template #form>
              <SharedInput v-model="login.email">Почта</SharedInput>
              <SharedInput v-model="login.password">Пароль</SharedInput>
              <div class="help__password">
                <span>Забыл Пароль</span>
                <NuxtIcon name="lock" filled/>
              </div>
              <SharedButton size="l" color="blue" @click="sendLogin">Войти</SharedButton>
            </template>
          </AuthContainer>
        </template>
    </AuthController>
</template>

<script setup lang="ts">
import AuthController from "~/controllers/AuthController/AuthController.vue";
import SharedButton from "~/components/SharedButtons/SharedButton.vue";

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
