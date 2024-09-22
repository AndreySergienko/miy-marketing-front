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
}
</style>
