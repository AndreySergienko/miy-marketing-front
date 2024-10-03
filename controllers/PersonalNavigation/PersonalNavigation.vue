<template>
  <section class="personal-navigation">
    <NuxtLink
      to="/personal/profile"
      class="personal-navigation__item"
      exact-active-class="personal-navigation__item--active"
    >
      Профиль
    </NuxtLink>
    <NuxtLink
      to="/personal/telegram"
      class="personal-navigation__item"
      exact-active-class="personal-navigation__item--active"
    >
      Мои каналы
    </NuxtLink>
    <NuxtLink
      to="/personal/history"
      class="personal-navigation__item"
      exact-active-class="personal-navigation__item--active"
    >
      История операций
    </NuxtLink>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss" src="./PersonalNavigation.scss"></style>
