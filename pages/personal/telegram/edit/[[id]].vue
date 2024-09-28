<template>
  <main class="telegram-edit">
    <TelegramEditHeader title="Новый канал" />
    <div class="telegram-edit__content">
      <TelegramEditMain
        :name="selectedChannel.name"
        :url="selectedChannel.url"
        :category="selectedChannel.categoryId"
        :categories="formattedCategories"
      />
      <TelegramEditDates
        :dates="channelDates"
        @change-data="handleChangeDates"
      />
      <TelegramEditSlots v-model="channelSlots" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ICategoriesItem } from "~/api/methods/categories/categories.types";
import type { ISlotsItem } from "~/components/TelegramEditSlots/TelegramEditSlots.types";
import { useCategoriesStore } from "~/store/categories/categories.store";
import { useFormatsStore } from "~/store/formats/formats.store";
import { useMyChannelsStore } from "~/store/myChannels/myChannels.store";
import { IMyChannel } from "~/store/myChannels/myChannels.types";

definePageMeta({
  layout: "telegram-edit",
});

const route = useRoute();
const id = computed(() => ("id" in route.params ? route.params.id : ""));

const myChannelsStore = useMyChannelsStore();
const { channels, selectedChannel } = storeToRefs(myChannelsStore);

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

const formatsStore = useFormatsStore();
const { formats } = storeToRefs(formatsStore);

await useAsyncData(
  "edit-channel",
  () => {
    const promises = [formatsStore.fetch(), categoriesStore.fetch()];

    if (+id) {
      promises.push(myChannelsStore.fetch());
    }

    return Promise.allSettled(promises);
  },
  {
    lazy: true,
  }
);

const formattedCategories = computed(() => {
  return categories.value.map((category: ICategoriesItem) => {
    return {
      label: category.title,
      value: category.id,
    };
  });
});

const channelSlots = ref<Map<string, ISlotsItem[]>>(new Map());

const channelDates = computed(() => Object.keys(channelSlots.value));

const handleChangeDates = ({ dates }: { dates: string[] }) => {
  for (const [key] of channelSlots.value) {
    if (dates.includes(key)) continue;
    channelSlots.value.delete(key);
  }

  for (const newKey of dates) {
    if (channelSlots.value.has(newKey)) continue;
    channelSlots.value.set(newKey, [{ time: "", interval: "" }]);
  }
};

watch(
  channels,
  (newChannels) => {
    if (!+id) {
      selectedChannel.value = {
        id: 0,
        title: "",
        url: "",
        subscribers: 0,
        isActive: false,
        categoryId: 0,
        dates: [],
      };
      return;
    }

    if (!newChannels.length) return;
    const channel = newChannels.find(
      (channel: IMyChannel) => channel.id === +id
    );
    if (!channel) return navigateTo("/personal/telegram");

    selectedChannel.value = channel;
  },
  { deep: true, immediate: true }
);
</script>

<style scoped lang="scss">
@use "assets/styles/media";

.telegram-edit {
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @include media.media-breakpoint-up(md) {
    padding: 0 30px;
  }

  @include media.media-breakpoint-up(lm) {
    padding: 0 40px;
  }

  @include media.media-breakpoint-up(l) {
    padding: 0 166px;
  }

  @include media.media-breakpoint-up(xl) {
    padding: 0 155px;
  }

  @include media.media-breakpoint-up(xxl) {
    padding: 0 278px;
  }

  &__content {
    margin: 30px 0 130px;
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 328px;
    gap: 60px;

    @include media.media-breakpoint-up(md) {
      max-width: 466px;
      margin: 64px 0 136px;
    }

    @include media.media-breakpoint-up(lm) {
      margin: 74px 0 145px;
    }

    @include media.media-breakpoint-up(l) {
      max-width: 534px;
      margin: 70px 0 150px;
    }
  }
}
</style>
