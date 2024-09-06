<template>
  <div
    :class="['authentication-forgot-password', rootClasses]"
    @mousemove="openShow"
    @mouseleave="closeShow"
  >
    <div class="authentication-forgot-password__title">Забыли пароль?</div>
    <div class="authentication-forgot-password__inner">
      Забыли пароль?<br />Для восстановления пароля необходимо перейти в
      <NuxtLink to="https://t.me/miy_ad_bot" external> тг бота </NuxtLink>
      и прописать команду /help password.
    </div>
  </div>
</template>

<script setup lang="ts">
const isShow = ref(false);

const rootClasses = computed(() => ({
  "authentication-forgot-password--shown": isShow.value,
}));

const openShow = () => {
  if (isShow.value) return;

  window.addEventListener("click", closeShow);
  isShow.value = true;
};

const closeShow = () => {
  window.removeEventListener("click", closeShow);
  isShow.value = false;
};
</script>

<style scoped lang="scss" src="./AuthenticationForgotPassword.scss"></style>
