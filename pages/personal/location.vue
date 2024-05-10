<template>
  <ProfileContainer>
    <template #form>
      <div class="location container">
        <SharedTitle class="location__title">Размещение TG-каналов</SharedTitle>
        <div class="location__inner">
          <SharedInput>Название</SharedInput>
          <div class="location__categories">
            <label class="location__categories-title">Выбор категории</label>
            <select class="location__categories-list">
              <option value="" selected disabled>Выберите категорию</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.value"
              >
                {{ category.title }}
              </option>
            </select>
          </div>
          <div class="location__calendar">
            <span class="location__calendar-title">
              Заполните календарь доступных рекламных слотов в вашем TG-канале
            </span>
            <SharedInput type="date">Дата</SharedInput>
            <SharedInput>Слоты</SharedInput>
            <div class="location__calendar-item">
              <SharedInput>Интервал</SharedInput>
              <SharedInput>Цена</SharedInput>
            </div>
          </div>
          <SharedInput class="location__input-link">
            Ссылка на канал тг
          </SharedInput>
          <SharedInput class="location__input-moderation">
            Предпочтение модерации
          </SharedInput>
          <SharedButton class="location__btn" color="gray" size="ml">
            Отправить
          </SharedButton>
        </div>
      </div>
    </template>
  </ProfileContainer>
</template>

<script setup>
import { useCategoriesStore } from "~/store/categories/categories.store";

definePageMeta({
  layout: "personal",
});

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

await useAsyncData("location-first-data", () => {
  return categoriesStore.getAll();
});
</script>

<style scoped lang="scss">
@use "assets/styles/media";

.location {
  margin-top: var(--ident-xxxl);

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 33%;

    @include media.media-breakpoint-down(xl) {
      width: 40vw;
    }

    @include media.media-breakpoint-down(md) {
      width: 60vw;
    }

    @include media.media-breakpoint-down(sm) {
      width: 92vw;
    }
  }

  &__title {
    margin-bottom: var(--ident-adaptive-xm);
  }

  &__calendar {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 1px solid var(--color-light-gray);
    border-radius: 13px;
    padding: var(--ident-l);

    &-title {
      font-size: var(--font-size-ml);
      font-weight: var(--font-weight-semi-bold);
    }

    &-item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;

      @include media.media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  &__input-link {
    font-weight: var(--font-weight-semi-bold);
  }

  &__btn {
    margin-bottom: var(--ident-l);
  }
  &__categories {
    display: flex;
    flex-direction: column;

    &-title {
      margin-bottom: var(--ident-m);

      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
    }

    &-list {
      height: 50px;
      border: 1px solid var(--color-light-gray);
      border-radius: 12px;
    }
  }
}
</style>
