<template>
  <ProfileContainer>
    <template #form>
      <div class="location container">
        <SharedTitle class="location__title">Размещение TG-каналов</SharedTitle>
        <ChannelInitial v-if="initialChannelData" v-bind="initialChannelData" />
        <div class="location__inner">
          <SharedInput name="name" type="text" :is-disabled="true" v-model="newChannel.name">
            Название
          </SharedInput>
          <SharedSelect
            title="Выбор категории"
            :selected="selectedCategory"
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
              :selected="newChannel.slots"
              :options="shownSlots"
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
            :is-disabled="true"
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
          <SharedButton
            class="location__btn"
            :color="buttonColor"
            size="xl"
            @click="submitNewChannel"
          >
            Отправить
          </SharedButton>
        </div>
      </div>
    </template>
  </ProfileContainer>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "~/store/categories/categories.store";
import { useChannelStore } from "~/store/channel/channel.store";
import type { INewChannel } from "~/store/channel/channel.types";

definePageMeta({
  layout: "personal",
});

const intervals = [
  { title: "1/24", value: "1" },
  { title: "1/48", value: "2" },
  { title: "30/24", value: "3" },
];

const slots = Array.from({ length: 48 }, (_, i) => {
  const hour = `${Math.floor(i / 2)}`.padStart(2, "0");
  const minute = `${(i % 2) * 30}`.padStart(2, "0");

  return {
    title: `${hour}:${minute}`,
    value: `${hour}:${minute}`,
  };
});

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

const channelsStore = useChannelStore();
const { initialChannelData } = storeToRefs(channelsStore);

await useAsyncData("location-first-data", () => {
  return categoriesStore.getAll();
});

const newChannel = reactive<INewChannel>({
  categoriesId: [],
  description: "",
  link: "",
  name: "",
  day: null,
  slots: [],
  price: "",
  formatChannel: 0,
  conditionCheck: "",
});

const selectedCategory = ref("");

const shownSlots = computed(() => {
  switch (newChannel.formatChannel) {
    case 1:
    case 2:
      return slots.filter((slot) => !slot.value.endsWith("30"));
    case 3:
      return slots;
    default:
      return [];
  }
});

const buttonColor = computed(() => {
  if (newChannel.name === "") return "gray";
  return "blue";
});

const handleCategorySelect = (value: string) => {
  const foundCategory = categories.value.find((c) => c.value === value);
  if (!foundCategory) return;

  selectedCategory.value = foundCategory.value;
  newChannel.categoriesId = [foundCategory.id];
};

const handleSlotsSelect = (value: string) => {
  newChannel.slots.push(value);
};

const handleSlotsUnselect = (value: string) => {
  const index = newChannel.slots.indexOf(value);
  newChannel.slots.splice(index, 1);
};

const submitNewChannel = async () => {
  if (!newChannel.day) return;

  await channelsStore.create({
    categoriesId: newChannel.categoriesId,
    description: newChannel.description,
    link: newChannel.link,
    name: newChannel.name,
    day: Number(newChannel.day),
    slots: newChannel.slots,
    price: Number(newChannel.price),
    formatChannel: newChannel.formatChannel,
    conditionCheck: newChannel.conditionCheck,
  });
};

onBeforeMount(() => {
  if (!initialChannelData.value) return navigateTo("/personal/connect");

  newChannel.name = initialChannelData.value.name;
  newChannel.link = initialChannelData.value.link;
});

watch(
  () => newChannel.formatChannel,
  () => {
    newChannel.slots = [];
  }
);
</script>

<style scoped lang="scss" src="./style.scss" />
