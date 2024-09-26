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

watch(
  channelDates,
  (newDates) => {
    for (const key in channelSlots.value) {
      if (newDates.includes(key)) continue;
      channelSlots.value.delete(key);
    }

    for (const newKey of newDates) {
      if (channelSlots.value.has(newKey)) continue;
      channelSlots.value.set(newKey, [{ time: "", interval: "" }]);
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
