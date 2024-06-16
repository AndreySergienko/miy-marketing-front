<template>
  <div class="channel-initial">
    <NuxtImg :src="avatar" :alt="name" height="150" width="150" />
    <span>{{ description }}</span>
    <span>Подписчиков: {{ subscribers }}</span>
  </div>
</template>

<script setup lang="ts">
  import type { IChannelInitialProps } from "./ChannelInitial.types";
  
  const props = defineProps<IChannelInitialProps>();

  const avatar = computed<string>(() => {
    if (props.avatar) return props.avatar;
    return '/tg.png'
  })

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
