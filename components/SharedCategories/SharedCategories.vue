<template>
  <div class="categories">
    <div class="categories__inner">
      <div v-if="isOpen" class="categories__list">
        <div class="container">
          <h3 class="categories__list-title">Все категории</h3>
          <div class="categories__items">
            <div
              v-for="(categoriesItem, id) in categoriesList" :key="categoriesItem.title + id"
              :class="['categories__item', 'active' && activeCategories[id]]"
              @click="emit('setCategory', categoriesItem.id)"
            >
              <div class="categories__item-text">{{ categoriesItem.title }}</div>
              <div v-if="categoriesItem.count" class="categories__item-number">{{ categoriesItem.count }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="categories__button">
        <button @click="showCategories" class="categories__button-text">
          Категории
          <nuxt-icon class="categories__button-icon" :name="iconName" filled></nuxt-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ISharedCategoriesEmits, ISharedCategoriesProps} from "~/components/SharedCategories/SharedCategories.type";

  const props = defineProps<ISharedCategoriesProps>()
  const emit = defineEmits<ISharedCategoriesEmits>()

  const isOpen = ref<boolean>(false)
  const iconName = ref<string>('arrow-down')

  const showCategories = () => {
    isOpen.value = !isOpen.value
    iconName.value = isOpen.value ? 'arrow-up' : 'arrow-down';
  }
</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .categories {
    position: fixed;
    margin-bottom: var(--indent-5xl);

    @include media.media-breakpoint-down(sm) {
      margin-bottom: var(--indent-3xl);
    }

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__list {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: var(--color-white);
      border: 1px solid var(--color-light-gray);
      border-radius: 13px;

      &-title {
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semi-bold);
        margin-bottom: var(--indent-2xl);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-l);
        }
      }
    }

    &__items {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--indent-m);
      margin-bottom: var(--indent-3xl);

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

      cursor: pointer;

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
      width: 100vw;

      display: flex;
      justify-content: center;

      &-text {
        padding: var(--indent-m) var(--indent-2xl);
        gap: var(--indent-m);
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
