<template>
  <nav>
    <ul class="navigation">
      <li v-for="(navItem, id) in navList" :key="id">
        <div class="navigation__item">
          {{ navItem.text }}
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import { navList } from './VNavigation.data';
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