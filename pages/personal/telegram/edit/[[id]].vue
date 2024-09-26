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
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "telegram-edit",
});

const channelDates = ref<string[]>([]);

const handleChangeDates = ({ dates }: { dates: string[] }) => {
  channelDates.value = dates;
};
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
