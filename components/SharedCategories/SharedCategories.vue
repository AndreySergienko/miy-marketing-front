<template>
  <div class="categories">
    <div class="categories__inner">
      <div v-if="isOpen" class="categories__list">
        <h3 class="categories__list-title">Все категории</h3>
        <div class="categories__items">
          <div class="categories__item"
            v-for="(categoriesItem, id) in categoriesList" :key="id"
          >
            <div class="categories__item-text">{{ categoriesItem.text }}</div>
            <div class="categories__item-number">{{ categoriesItem.number }}</div>
          </div>
        </div>
      </div>
      <div class="categories__button">
        <button @click="showCategories" class="categories__button-text">
          Категории
          <nuxt-icon calss="categories__button-icon" :name="iconName" filled></nuxt-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {categoriesList} from './SharedCategories.data'
  import {ref} from 'vue'

  const isOpen = ref(false)
  const iconName = ref('arrow-down')

  const showCategories = () => {
    isOpen.value = !isOpen.value
    iconName.value = isOpen.value ? 'arrow-up' : 'arrow-down';
  }
</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .categories {
    margin-bottom: var(--ident-xxxl);

    @include media.media-breakpoint-down(sm) {
      margin-bottom: var(--ident-adaptive-xl);
    }

    &__container {
      max-width: 1600px;
      margin: 0 auto;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include media.media-breakpoint-down(l) {
        padding: 0 var(--ident-adaptive-xm);
      }
      
      @include media.media-breakpoint-down(sm) {
          padding: 0 var(--ident-l);
        }
    }

    &__list {
      display: flex;
      flex-direction: column;
      width: 100%;

      &-title {
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semi-bold);
        margin-bottom: var(--ident-xm);
      }
    }

    &__items {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--ident-ml);
      margin-bottom: var(--ident-adaptive-xl);

      @include media.media-breakpoint-down(l) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include media.media-breakpoint-down(sm) {
          grid-template-columns: repeat(1, 1fr);
        }
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-text {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);
      }

      &-number {
        font-size: var(--font-size-s);
        font-weight: var(--font-weight-medium);
      }
    }

    &__button {
      border-top: 1px solid var(--color-light-gray);
      width: 100vw;

      display: flex;
      justify-content: center;

      &-text {
        padding: var(--ident-m) var(--ident-xs);
        gap: var(--ident-ml);
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: var(--font-size-m);
        color: var(--color-white);
        background-color: var(--color-blue);

        border: 1px solid var(--color-blue);
        border-radius: 10px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
        cursor: pointer;
      }

      &-icon {
        font-size: var(--font-size-l);
      }
    }
  }
</style>