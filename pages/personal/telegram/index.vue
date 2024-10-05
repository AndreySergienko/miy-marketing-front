<template>
  <div class="telegram-page">
    <div v-if="!channels.length && !canCreate" class="telegram-page__empty">
      <p>Заполните данные для дальнейшей работы</p>
      <nuxt-link class="stylish-link" to="/personal/profile">Заполнить здесь</nuxt-link>
    </div>
    <div v-else class="telegram-page__content">
      <ChannelCard
        v-for="channelData in channels"
        :key="channelData.id"
        v-bind="channelData"
        :category="getCategoryById(channelData.categoryId)"
        @click="handleClickCard(channelData)"
      />
      <ChannelAdd v-if="canCreate" @click="addNewChannel" />
      <ChannelDetails
        v-if="showDetails && selectedChannel"
        v-bind="selectedChannel"
        :dates="getFormattedDates(selectedChannel.dates)"
        :category="getCategoryById(selectedChannel.categoryId)"
        @close="handleCloseDetails"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  IMyChannel,
  IMyChannelDate,
} from "~/store/myChannels/myChannels.types";
import type { ICategoriesItem } from "~/api/methods/categories/categories.types";
import type { IFormat } from "~/api/methods/channels/channels.types";

import { useCategoriesStore } from "~/store/categories/categories.store";
import { useMyChannelsStore } from "~/store/myChannels/myChannels.store";
import { useUserStore } from "~/store/user/user.store";
import { useFormatsStore } from "~/store/formats/formats.store";

definePageMeta({
  layout: "personal",
});

const userStore = useUserStore();
const { permissions } = storeToRefs(userStore);

const myChannelsStore = useMyChannelsStore();
const { channels, selectedChannel } = storeToRefs(myChannelsStore);

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

const formatsStore = useFormatsStore();
const { formats } = storeToRefs(formatsStore);

await useAsyncData(
  "my-channels",
  () => {
    return Promise.allSettled([
      formatsStore.fetch(),
      categoriesStore.fetch(),
      myChannelsStore.fetch(),
    ]);
  },
  {
    lazy: true,
  }
);

const showDetails = ref(false);

const canCreate = computed(() => permissions.value.CAN_PUBLIC_CHANNEL);

const getCategoryById = computed(() => (id: number) => {
  const category = categories.value.find(
    (category: ICategoriesItem) => category.id === id
  );
  return category ? category.title : "";
});

const getFormattedDates = computed(() => (dates: IMyChannelDate[]) => {
  const formattedDates = dates.map((date) => {
    const { slots } = date;

    const formattedSlots = slots.map((slot) => {
      const interval = formats.value.find(
        (format: IFormat) => format.id === slot.formatChannelId
      );
      const { timestamp, price } = slot;

      return {
        time: timestamp,
        price,
        interval: interval.value,
      };
    });

    return {
      ...date,
      slots: formattedSlots,
    };
  });

  return formattedDates;
});

const handleClickCard = (channel: IMyChannel) => {
  selectedChannel.value = channel;
  showDetails.value = true;
};

const handleCloseDetails = () => {
  selectedChannel.value = null;
  showDetails.value = false;
};

const addNewChannel = () => navigateTo("/personal/connect");
</script>

<style scoped lang="scss" >
@use "assets/styles/media";

.stylish-link {
  top: 30px;
  text-decoration: none; // Убирает подчеркивание
  color: #3498db; // Начальный цвет текста
  position: relative; // Для абсолютного позиционирования псевдоэлементов
  font-weight: bold; // Полужирный текст
  padding: 5px 10px; // Отступы вокруг текста
  border-radius: 5px; // Скругленные углы
  transition: background-color 0.3s, color 0.3s; // Плавные переходы

  &::after {
    content: ''; // Содержимое псевдоэлемента
    position: absolute; // Абсолютное позиционирование
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px; // Высота подчеркивания
    background: #3498db; // Цвет подчеркивания
    transform: scaleX(0); // Начальное состояние подчеркивания
    transition: transform 0.3s; // Плавный переход
  }

  &:hover {
    color: #2980b9; // Цвет текста при наведении

    &::after {
      transform: scaleX(1); // Подчеркивание при наведении
    }
  }
}


.telegram-page {
  margin-top: 24px;

  @include media.media-breakpoint-up(md) {
    margin-top: 21px;
  }

  &__empty {
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @include media.media-breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media.media-breakpoint-up(lm) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media.media-breakpoint-up(xxl) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
