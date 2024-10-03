<template>
  <div class="telegram-page">
    <div v-if="!channels.length && !canCreate" class="telegram-page__empty">
      Заполните данные для дальнейшей работы
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

<style scoped lang="scss">
@use "assets/styles/media";
.telegram-page {
  margin-top: 24px;

  @include media.media-breakpoint-up(md) {
    margin-top: 21px;
  }

  &__empty {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
