<template>
  <div
    :class="['authentication-forgot-password', rootClasses]"
    @mousemove="openShow"
    @mouseleave="closeShow"
  >
    <div class="authentication-forgot-password__title">Забыли пароль?</div>
    <div class="authentication-forgot-password__inner">
      Сброс пароля проходит через нашего
      <NuxtLink
        class="authentication-forgot-password__inner-link"
        to="https://t.me/miy_ad_bot"
        external
        target="_blank"
      >
        TG-бота.
      </NuxtLink>
      Для сброса пароля просто напишите <b>/help password.</b>
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
