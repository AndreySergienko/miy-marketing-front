<template>
  <ProfileContainer>
    <template #form>
      <div class="location container">
        <SharedTitle class="location__title">Размещение TG-каналов</SharedTitle>
        <div class="location__inner">
          <SharedInput name="name" type="text" v-model="newChannel.name">
            Название
          </SharedInput>
          <SharedSelect
            title="Выбор категории"
            :selected="category"
            :options="categories"
            @select="handleCategorySelect"
          />
          <div class="location__calendar">
            <span class="location__calendar-title">
              Заполните календарь доступных рекламных слотов в вашем TG-канале
            </span>
            <SharedCalendar
              title="Календарь"
              :selected="newChannel.day"
              @select="newChannel.day = $event"
            />
            <SharedMultiselect
              title="Слоты"
              :selected="selectedSlots"
              :options="slots"
              @select="handleSlotsSelect"
              @unselect="handleSlotsUnselect"
            />
            <div class="location__calendar-item">
              <SharedSelect
                class="location__calendar-item-interval"
                title="Интервал"
                :selected="`${newChannel.formatChannel}`"
                :options="intervals"
                @select="newChannel.formatChannel = +$event"
              />
              <SharedInput
                name="price"
                type="number"
                v-model="newChannel.price"
              >
                Цена
              </SharedInput>
            </div>
          </div>
          <SharedInput
            name="link"
            type="text"
            v-model="newChannel.link"
            class="location__input-link"
          >
            Ссылка на канал тг
          </SharedInput>
          <SharedInput
            name="conditionCheck"
            type="text"
            v-model="newChannel.conditionCheck"
            class="location__input-moderation"
          >
            Предпочтение модерации
          </SharedInput>
          <SharedButton class="location__btn" color="gray" size="xl">
            Отправить
          </SharedButton>
        </div>
      </div>
    </template>
  </ProfileContainer>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "~/store/categories/categories.store";
import type { INewChannel } from "~/store/channel/channel.types";

definePageMeta({
  layout: "personal",
});

const intervals = [
  { title: "1/24", value: "1" },
  { title: "2/48", value: "2" },
];

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

await useAsyncData("location-first-data", () => {
  return categoriesStore.getAll();
});

const newChannel = reactive<INewChannel>({
  categoriesId: [],
  description: "",
  link: "",
  name: "",
  day: null,
  slots: [], // Слоты
  price: "",
  formatChannel: 0,
  conditionCheck: "",
});

const category = ref("");

const handleCategorySelect = (value: string) => {
  const foundCategory = categories.value.find((c) => c.value === value);
  if (!foundCategory) return;

  category.value = foundCategory.value;
  newChannel.categoriesId = [foundCategory.id];
};

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
</script>

<style scoped lang="scss">
@use "assets/styles/media";

.location {
  margin-top: var(--ident-5xl);

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
    margin-bottom: var(--ident-2xl);
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
      margin-bottom: var(--ident-s);

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
