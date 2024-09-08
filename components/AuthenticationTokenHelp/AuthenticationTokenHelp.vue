<template>
  <div
    :class="['authentication-token-help', rootClasses]"
    @mousemove="openShow"
    @mouseleave="closeShow"
  >
    <NuxtIcon
      class="authentication-token-help__title"
      name="auth-help"
      filled
    />
    <div class="authentication-token-help__inner">
      Вы сможете получить уникальный ID через нашего
      <NuxtLink
        class="authentication-token-help__inner-link"
        to="https://t.me/miy_ad_bot"
        external
        target="_blank"
      >
        TG-бота.
      </NuxtLink>
      Для начала напишите в строке <b>/start</b>. Убедительная просьба
      использовать один аккаунт при получении ID и при будущем осуществлении
      рекламы. В обязательно порядке при размещении рекламы в TG каналах вы
      должны быть админом.
    </div>
  </div>
</template>

<script setup lang="ts">
const isShow = ref(false);

const rootClasses = computed(() => ({
  "authentication-token-help--shown": isShow.value,
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

<style scoped lang="scss" src="./AuthenticationTokenHelp.scss"></style>
