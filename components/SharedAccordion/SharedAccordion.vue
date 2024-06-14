<template>
  <div class="accordion">
    <div class="accordion__inner">
      <div class="accordion__item">
        <div class="accordion__title">
          <span><slot name="title" /></span>
          <nuxt-icon class="accordion__icon" @click="accordion" :name="isOpen ? 'minus' : 'plus'" filled></nuxt-icon>
        </div>
        <div v-if="isOpen" class="accordion__text">
          <p><slot name="text"/></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import {ref} from 'vue';

  const isOpen = ref(false)

  const accordion = () => {
    isOpen.value = !isOpen.value
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

