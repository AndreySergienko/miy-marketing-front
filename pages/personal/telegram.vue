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
        @click="navigateTo('/personal/location')"
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
  margin-top: var(--ident-2xl);
  margin-bottom: 30px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--ident-l) 0 var(--ident-3xl);
    border-bottom: 2px solid var(--color-dark-gray);

    &-title {
      margin: 0;
    }

    &-button {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      padding: var(--ident-l) var(--ident-3xl);
    }
  }
}
</style>
