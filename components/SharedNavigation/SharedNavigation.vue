<template>
  <nav>
    <ul :class="['navigation', navDirection[position] ]">
      <li v-for="(navItem, id) in navList" :key="id">
        <div class="navigation__item">
          {{ navItem.text }}
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { navList } from './SharedNavigation.data';
  import type { TNavBurger } from './SharedNavigation.type';

  const navDirection: TNavBurger = {
    column: 'navigation__column'
  }
  const props = defineProps({
    position: String,
  })
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';

  .navigation {
    display: flex;
    cursor: pointer;
    gap: var(--ident-3xl);

    @include media.media-breakpoint-down(sm) {
      gap: var( --ident-l);
      flex-direction: column;
      align-items: flex-start;
    }

    &__column {
      display: flex;
      flex-direction: column;
      padding-left: var(--ident-l);
      
      @include media.media-breakpoint-down(sm) {
        margin-bottom: var(--ident-xl);
      }

    }
  }
  li {
    list-style: none;
  }
  .navigation__item {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-s);
    }
  }
</style>