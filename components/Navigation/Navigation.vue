<template>
  <nav>
    <ul class="navigation">
      <li v-for="navItem in navList" :key="navItem.text">
        <nuxt-link class="navigation__item">
          {{ navItem.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import { navList } from './Navigation.data';
</script>

<style scoped>
  .navigation {
    display: flex;
    cursor: pointer;
    gap: 50px;
  }
  li {
    list-style: none;
  }
  .navigation__item {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
  }
</style>