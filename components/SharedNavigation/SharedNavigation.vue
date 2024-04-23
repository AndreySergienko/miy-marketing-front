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
    gap: var(--ident-adaptive-xl);

    @include media.media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      gap: var( --ident-l);
    }

    &__column {
      display: flex;
      flex-direction: column;
      padding-left: var(--ident-xs);
      
      @include media.media-breakpoint-down(l) {
        padding-left: var(--ident-xs);
      }

      @include media.media-breakpoint-down(sm) {
        padding-left: var(--ident-m);
        margin-bottom: var(--ident-adaptive-xl);
      }

      @include media.media-breakpoint-down(md) {
        padding-left: var(--ident-xs);
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