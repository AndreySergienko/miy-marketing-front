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
     :class="['personal-navigation__item', { 'personal-navigation__item--active': route.path === '/personal/connect' }]"
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

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped lang="scss" src="./PersonalNavigation.scss"></style>
