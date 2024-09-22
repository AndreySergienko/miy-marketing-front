<template>
  <div class="telegram-page">
    <ChannelCard
      :id="1"
      image=""
      title="Котики"
      category="Развлечение"
      :subscribers="1500"
      :is-active="false"
    />
    <ChannelAdd />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user/user.store";

definePageMeta({
  layout: "personal",
});

const userStore = useUserStore();
const { permissions } = storeToRefs(userStore);

const cannotCreate = computed(() => !permissions.value.CAN_PUBLIC_CHANNEL);
</script>

<style scoped lang="scss">
@use "assets/styles/media";
.telegram-page {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @include media.media-breakpoint-up(md) {
    margin-top: 21px;
    grid-template-columns: repeat(2, 1fr);
  }

  @include media.media-breakpoint-up(lm) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media.media-breakpoint-up(xxl) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
