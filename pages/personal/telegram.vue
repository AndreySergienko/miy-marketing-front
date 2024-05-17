<template>
  <div class="telegram container">
    <div class="telegram__top">
      <SharedTitle class="telegram__top-title">
        Размещение TG-каналов
      </SharedTitle>
      <SharedButton
        class="telegram__top-button"
        color="blue"
        size="l"
        @click="navigateTo('/personal/connect')"
      >
        Опубликовать TG-канал
      </SharedButton>
    </div>
    <ProfileChannelsListController />
  </div>
</template>

<script setup lang="ts">
import ProfileChannelsListController from "~/controllers/ProfileChannelsListController/ProfileChannelsListController.vue";

definePageMeta({
  layout: "personal",
});
</script>

<style scoped lang="scss">
.telegram {
  margin-top: var(--indent-2xl);
  margin-bottom: 30px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--indent-l) 0 var(--indent-3xl);
    border-bottom: 2px solid var(--color-dark-gray);

    &-title {
      margin: 0;
    }

    &-button {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      padding: var(--indent-l) var(--indent-3xl);
    }
  }
}
</style>
