<template>
  <main class="registration-page">
    <h1 class="registration-page__title">Регистрация</h1>

    <section class="registration-page__content">
      <RegistrationFirstStep />
    </section>

    <footer class="registration-page__info">
      Уже есть аккаунт?
      <NuxtLink class="registration-page__info-link" to="/authentication/login">
        Войти
      </NuxtLink>
    </footer>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});
</script>

<style lang="scss" scoped>
@use "assets/styles/media";

.registration-page {
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

  &__content {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
