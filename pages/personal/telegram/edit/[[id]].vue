<template>
  <main class="telegram-edit">
    <TelegramEditHeader title="Новый канал" />
    <div class="telegram-edit__content">
      <TelegramEditMain
        name="Котики"
        url="@kotiki"
        category="fun"
        :categories="[
          { label: 'Развлечение', value: 'fun' },
          { label: 'Бизнес', value: 'business' },
        ]"
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
import type { ISlotsItem } from "~/components/TelegramEditSlots/TelegramEditSlots.types";

definePageMeta({
  layout: "telegram-edit",
});

const channelDates = ref<string[]>([]);
const channelSlots = ref<Map<string, ISlotsItem[]>>(new Map());

const handleChangeDates = ({ dates }: { dates: string[] }) => {
  channelDates.value = dates;
};

const handleChangeSlots = ({ slots }: { slots: Map<string, ISlotsItem[]> }) => {
  channelSlots.value = slots;
};

watch(
  channelDates,
  (newDates) => {
    for (const key in channelSlots.value) {
      if (newDates.includes(key)) continue;
      channelSlots.value.delete(key);
    }

    for (const newKey of newDates) {
      if (channelSlots.value.has(newKey)) continue;
      channelSlots.value.set(newKey, []);
    }
  },
  { deep: true }
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
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @include media.media-breakpoint-up(md) {
      margin-top: 64px;
    }

    @include media.media-breakpoint-up(lm) {
      margin-top: 74px;
    }

    @include media.media-breakpoint-up(l) {
      margin-top: 70px;
    }
  }
}
</style>
