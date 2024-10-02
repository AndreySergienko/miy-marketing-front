<template>
  <main v-if="editingChannel" class="telegram-edit">
    <TelegramEditHeader title="Новый канал" @create="handleCreateEditChannel" />
    <div class="telegram-edit__content">
      <TelegramEditMain
        :name="editingChannel.title"
        :url="editingChannel.url"
        :category="editingChannel.categoryId"
        :categories="formattedCategories"
        @change-data="handleChangeMain"
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
import type { ICategoriesItem } from "~/api/methods/categories/categories.types";
import type { ISlotsItem } from "~/components/TelegramEditSlots/TelegramEditSlots.types";
import type {
  IMyChannel,
  IMyChannelDateSlot,
} from "~/store/myChannels/myChannels.types";
import type { ITelegramEditMainData } from "~/components/TelegramEditMain/TelegramEditMain.types";

import { useCategoriesStore } from "~/store/categories/categories.store";
import { useFormatsStore } from "~/store/formats/formats.store";
import { useMyChannelsStore } from "~/store/myChannels/myChannels.store";

definePageMeta({
  layout: "telegram-edit",
});

const route = useRoute();
const id = computed(() => ("id" in route.params ? route.params.id : ""));

const myChannelsStore = useMyChannelsStore();
const { channels, initialChannelData } = storeToRefs(myChannelsStore);

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

const formatsStore = useFormatsStore();

await useAsyncData(
  "edit-channel",
  () => {
    const promises = [formatsStore.fetch(), categoriesStore.fetch()];

    if (+(id.value ?? "")) {
      promises.push(myChannelsStore.fetch());
    }

    return Promise.allSettled(promises);
  },
  {
    lazy: true,
  }
);

const editingChannel = ref<IMyChannel | null>(null);

const formattedCategories = computed(() => {
  return categories.value.map((category: ICategoriesItem) => {
    return {
      label: category.title,
      value: category.id,
    };
  });
});

const channelSlots = ref<Map<string, ISlotsItem[]>>(new Map());
const channelDates = computed(() => {
  const result = [];

  for (const [key] of channelSlots.value) {
    if (!channelSlots.value.has(key)) continue;
    result.push(key);
  }

  return result;
});

const handleChangeMain = ({ name, url, category }: ITelegramEditMainData) => {
  editingChannel.value!.title = name;
  editingChannel.value!.url = url;
  editingChannel.value!.categoryId = +category;
};

const handleChangeDates = ({ dates }: { dates: string[] }) => {
  for (const [key] of channelSlots.value) {
    if (dates.includes(key)) continue;
    channelSlots.value.delete(key);
  }

  for (const newKey of dates) {
    if (channelSlots.value.has(newKey)) continue;
    channelSlots.value.set(newKey, [{ time: "" }]);
  }
};

const handleCreateEditChannel = async () => {
  if (!editingChannel.value) return;

  if (id.value) {
    await myChannelsStore.update(editingChannel.value, channelSlots.value);
  } else {
    await myChannelsStore.create(editingChannel.value, channelSlots.value);
  }
};

watch(
  channels,
  (newChannels) => {
    if (!+(id.value ?? "")) {
      if (!initialChannelData.value) {
        return navigateTo("/personal/telegram");
      }

      const { link, name } = initialChannelData.value;

      editingChannel.value = {
        id: 0,
        title: name,
        url: link,
        image: "",
        subscribers: 0,
        isActive: false,
        categoryId: 0,
        dates: [],
      };
      return;
    }

    if (!newChannels.length) return;
    const channel = newChannels.find(
      (channel: IMyChannel) => channel.id === +id.value!
    );
    if (!channel) return navigateTo("/personal/telegram");

    editingChannel.value = channel;

    for (const date of channel.dates) {
      if (channelSlots.value.has(date)) continue;

      const slots = date.slots.map((slot: IMyChannelDateSlot) => {
        const { timestamp, price, formatChannelId } = slot;

        return {
          time: timestamp,
          price,
          intervalId: formatChannelId,
        };
      });

      channelSlots.value.set(date.date, slots.length ? slots : [{ time: "" }]);
    }
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
