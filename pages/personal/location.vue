<template>
  <ProfileContainer>
    <template #form>
      <div class="location container">
        <SharedTitle class="location__title">Размещение TG-каналов</SharedTitle>
        <div class="location__inner">
          <SharedInput>Название</SharedInput>
          <SharedSelect
            title="Выбор категории"
            :selected="category"
            :options="categories"
            @select="category = $event"
          />
          <div class="location__calendar">
            <span class="location__calendar-title">
              Заполните календарь доступных рекламных слотов в вашем TG-канале
            </span>
            <SharedCalendar
              title="Календарь"
              :selected="selectedDate"
              @select="selectedDate = $event"
            />
            <SharedMultiselect
              title="Слоты"
              :selected="selectedSlots"
              :options="slots"
              @select="handleSlotsSelect"
              @unselect="handleSlotsUnselect"
            />
            <div class="location__calendar-item">
              <SharedMultiselect
                class="location__calendar-item-interval"
                title="Интервал"
                :selected="selectedIntervals"
                :options="intervals"
                @select="handleIntervalsSelect"
                @unselect="handleIntervalsUnselect"
              />
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

<script setup lang="ts">
import { useCategoriesStore } from "~/store/categories/categories.store";

definePageMeta({
  layout: "personal",
});

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

await useAsyncData("location-first-data", () => {
  return categoriesStore.getAll();
});

const category = ref("");

const slots = [
  { title: "10:00", value: "10:00" },
  { title: "11:00", value: "11:00" },
];
const selectedSlots = ref<string[]>([]);

const handleSlotsSelect = (value: string) => {
  selectedSlots.value.push(value);
};

const handleSlotsUnselect = (value: string) => {
  const index = selectedSlots.value.indexOf(value);
  selectedSlots.value.splice(index, 1);
};

const selectedDate = ref<Date | null>(null);

const intervals = [
  { title: "1/24", value: "1/24" },
  { title: "1/48", value: "1/48" },
  { title: "1/128", value: "1/128" },
];
const selectedIntervals = ref<string[]>([]);

const handleIntervalsSelect = (value: string) => {
  selectedIntervals.value.push(value);
};

const handleIntervalsUnselect = (value: string) => {
  const index = selectedIntervals.value.indexOf(value);
  selectedIntervals.value.splice(index, 1);
};
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
    width: fit-content;
    padding: var(--ident-l) 48px;
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
