<template>
  <main class="complete-page">
    <NuxtImg
      class="complete-page__image"
      src="/auth-complete.png"
      alt="complete"
    />
    <div class="complete-page__content">
      <h1>Спасибо за регистрацию!</h1>
      <p>На вашу почту пришло письмо с просьбой потвердить регистрацию</p>
    </div>
    <AuthenticationButton
      class="complete-page__button"
      @click="navigateTo('/')"
    >
      Вернуться на главную
    </AuthenticationButton>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "authentication",
});
</script>

<style scoped lang="scss">
@use "assets/styles/media";

.complete-page {
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

  &__content {
    margin-top: 46px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    color: var(--new-black);

    h1 {
      font-size: 25px;
      font-weight: 600;
    }

    p {
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__button {
    margin-top: 42px;
  }
}
</style>
