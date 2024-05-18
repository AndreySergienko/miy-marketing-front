<template>
  <div class="benefit__list">
    <div 
    class="benefit__item" 
    v-for="(benItem, index, id) in benefitList" :key="id"
    >
      <div :class="correctClass(index)">
        <div class="benefit__text">{{ benItem.text }}</div>
        <div class="benefit__number">{{ benItem.number }}</div>
      </div>
      
    </div>
  </div>
</template>


<script setup>
  import {benefitList} from './SharedBenefit.data';
  import { computed } from 'vue';

  const correctClass = computed(() => {
    return (index) => {
      return index === 0 || index === 2 ? 'text__white' : 'text__black'
    }
  })
</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';

  .text__white, .text__black {
    margin-bottom: var(--indent-xl);
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    border-radius: 45px;

  }

  .benefit__text {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    width: 50%;

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-s);
      width: 65%;
    }
  }
  
  .benefit__number {
    font-size: var(--font-size-3xl);
    font-weight: var(--font-weight-bold);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-l);
    }
  }

  .text__white {
    color: var(--color-white);
    background-color: var(--color-black);
    
    .benefit__text {
      order: 0;
      margin-left: var(--indent-xl);
    }

    .benefit__number {
      order: 1;
      margin-right: var(--indent-xl);
    }
  }

  .text__black {
    color: var(--color-black);
    background: var(--color-white);
    border: 1px solid var(--color-light-gray);

    .benefit__text {
      order: 1;
      margin-right: var(--indent-xl);
    }

    .benefit__number {
      order: 0;
      margin-left: var(--indent-xl);
    }
  }
</style>