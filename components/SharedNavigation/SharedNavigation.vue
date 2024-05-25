<template>
  <nav>
    <ul :class="['navigation', navDirection[position] ]">
      <li v-for="(navItem, id) in navList" :key="id">
        <a :href="'#' + navItem.link" class="navigation__link">
          <div class="navigation__item">
            {{ navItem.text }}
          </div>
        </a>
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
    gap: var(--indent-3xl);

    @include media.media-breakpoint-down(sm) {
      gap: var( --indent-l);
      flex-direction: column;
      align-items: flex-start;
    }

    &__link {
      text-decoration: none;
      color: var(--color-black);
    }

    &__item {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-s);
      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      padding-left: var(--indent-l);
      
      @include media.media-breakpoint-down(sm) {
        margin-bottom: var(--indent-xl);
      }

    }
  }
  li {
    list-style: none;
  }
</style>