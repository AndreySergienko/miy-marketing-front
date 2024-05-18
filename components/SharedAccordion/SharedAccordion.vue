<template>
  <div class="accordion">
    <div v-for="(accordItem, id) in accordList" :key="id" class="accordion__inner">
      <div class="accordion__item">
        <div class="accordion__title">
          <span> {{ accordItem.title }}</span>
          <nuxt-icon class="accordion__icon" @click="accordion(accordItem)" :name="accordItem.isOpen ? 'minus' : 'plus'" filled></nuxt-icon>
        </div>
        <div v-if="accordItem.isOpen" class="accordion__text">
          <p>{{ accordItem.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { accordList } from './SharedAccordion.data.ts';
  import {ref} from 'vue';

  const iconName = ref('plus')

  const accordion = (item) => {
    item.isOpen = !item.isOpen
  }
  

</script>
<style lang="scss" scoped>
  @use 'assets/styles/media';
  .accordion {
    padding: 0 var(--indent-l);
    
    &__item {
      padding: var(--indent-xl);
      border: 1px solid var(--color-light-gray);
      border-radius: 25px;
      margin-bottom: var(--indent-xl);
    }

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: var(--font-size-l);
      font-weight: var(--font-weight-semi-bold);

      @include media.media-breakpoint-down(md) {
        font-size: var(--font-size-m);
      }
      
      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-m);
      }
    }

    &__text {
      margin-top: var(--indent-4xl);
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-s);
      }
    }

    &__icon {
      cursor: pointer;
    }
  }
  
</style>

