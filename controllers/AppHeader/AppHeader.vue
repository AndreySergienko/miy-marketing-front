<template>
  <header class="app-header" v-outside-click="handleOutsideClick">
    <h1 class="app-header__title" @click="navigateTo('/')">On-Developer</h1>
    <div :class="['app-header__content', contentClass]">
      <div class="app-header__links">
        <NuxtLink class="app-header__links--item" to="/#benefit">
          Преимущества
        </NuxtLink>
        <NuxtLink class="app-header__links--item" to="/#telegram">
          Каналы
        </NuxtLink>
        <NuxtLink class="app-header__links--item" to="/#faq">FAQ</NuxtLink>
        <NuxtLink class="app-header__links--item" to="/#contact">
          Контакты
        </NuxtLink>
      </div>
      <DefaultButton class="app-header__auth" @click="handleAuthClick">
        {{ authButtonText }}
      </DefaultButton>
    </div>
    <NuxtIcon
      class="app-header__burger"
      name="header-burger"
      filled
      @click="toggleBurger"
    />
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth/auth.store";

const authStore = useAuthStore();
const { isAuth } = storeToRefs(authStore);

const isOpenedBurger = ref(false);

const contentClass = computed(() => ({
  "app-header__content--opened": isOpenedBurger.value,
}));

const authButtonText = computed(() => (isAuth.value ? "Выйти" : "Войти"));

const toggleBurger = () => {
  isOpenedBurger.value = !isOpenedBurger.value;
};

const handleOutsideClick = async () => {
  await nextTick();
  isOpenedBurger.value = false;
};

const handleAuthClick = () => {
  if (isAuth.value) {
    authStore.logout();
    reloadNuxtApp();
    return;
  }

  return navigateTo("/authentication/login");
};
</script>

<style scoped lang="scss" src="./AppHeader.scss"></style>
