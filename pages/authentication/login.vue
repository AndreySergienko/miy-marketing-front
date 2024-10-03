<template>
  <main class="login-page">
    <h1 class="login-page__title">Вход</h1>
    <section class="login-page__form">
      <div class="login-page__form-content">
        <AuthenticationInput
          name="email"
          label="Email"
          type="email"
          placeholder="Введите почту"
        />
        <div class="login-page__form-content__password">
          <AuthenticationForgotPassword />
          <AuthenticationInput
            name="password"
            label="Пароль"
            type="password"
            placeholder="Введите пароль"
          />
        </div>
      </div>
      <AuthenticationButton
        :disabled="!meta.valid || isLoading"
        @click="authStore.login(values)"
      >
        Войти
      </AuthenticationButton>
    </section>
    <footer class="login-page__info">
      Нет аккаунта?
      <NuxtLink class="login-page__info-link" to="/authentication/registration">
        Зарегистрироваться
      </NuxtLink>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { object, string } from "yup";
import { useAuthStore } from "~/store/auth/auth.store";

definePageMeta({
  layout: "authentication",
});

const authStore = useAuthStore();
const { isLoading } = storeToRefs(authStore);

const { meta, values } = useForm({
  validationSchema: object({
    email: string().email(rules.email).required(rules.required).label(""),
    password: string()
      .min(10, rules.minPassword)
      .max(40, rules.maxPassword)
      .matches(/^(?=.*[0-9])/, rules.number)
      .matches(/^(?=.*[A-Z])/, rules.letter)
      .matches(/^(?=.*[!@#$%^&*])/, rules.symbol)
      .required(rules.required)
      .label(""),
  }),
});
</script>

<style scoped lang="scss">
@use "assets/styles/media";

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;

  @include media.media-breakpoint-up(md) {
    width: 466px;
  }

  @include media.media-breakpoint-up(lm) {
    width: 313px;
  }

  &__title {
    color: var(--new-black);
    font-size: 25px;
    font-weight: 600;
  }

  &__form {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    &-content {
      display: flex;
      flex-direction: column;
      gap: 20px;

      &__password {
        position: relative;

        :deep(.authentication-forgot-password) {
          right: 0;
        }
      }
    }
  }

  &__info {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;

    &-link {
      text-decoration: none;
      color: var(--new-primary);
    }
  }
}
</style>
