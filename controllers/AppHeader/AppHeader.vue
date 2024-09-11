<template>
  <header class="app-header">
    <h1 class="app-header__title">On-Developer</h1>
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
    <button class="app-header__auth"></button>
    <NuxtIcon class="app-header__burger" name="header-burger" filled />
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss" src="./AppHeader.scss"></style>
