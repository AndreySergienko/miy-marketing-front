<template>
  <div class="accordion">
    <div v-for="(accordItem, id) in accordList" :key="id" class="accordion__inner">
      <div class="accordion__title">
        <h3> {{ accordItem.title }}</h3>
        <nuxt-icon @click="accordion(accordItem)" :name="accordItem.isOpen ? 'minus' : 'plus'" filled></nuxt-icon>
      </div>
      <div v-if="accordItem.isOpen" class="accordion__text">
        <p>{{ accordItem.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { accordList } from './Accordion.data.ts';
  import {ref} from 'vue';

  const iconName = ref('plus')

  const accordion = (item) => {
    item.isOpen = !item.isOpen
  }
  

</script>
<style lang="scss" scoped>
  .accordion {
    &__inner {
      padding: var(--ident-xs);
    }

    &__title {
      margin-bottom: var(--ident-xl);

      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: var(--font-size-l);
      font-weight: var(--font-weight-semi-bold);
    }

    &__text {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
    }
  }
  
</style>

