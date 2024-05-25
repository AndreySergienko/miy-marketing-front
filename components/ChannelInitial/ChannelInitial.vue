<template>
  <div class="channel-initial">
    <NuxtImg :src="avatar" :alt="name" height="150" width="150" />
    <span>{{ description }}</span>
    <span>Подписчиков: {{ subscribers }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IChannelInitialProps } from "./ChannelInitial.types";

defineProps<IChannelInitialProps>();
</script>

<style scoped lang="scss">
.channel-initial {
  display: flex;
  flex-direction: column;
  gap: var(--indent-m);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-semi-bold);
}
</style>
