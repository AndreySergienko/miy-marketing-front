<template>
  <h3 class="title">{{ title }}</h3>
</template>

<script setup>
  import { useChannelStore } from "~/store/channel/channel.store";

  const channelStore = useChannelStore();
  const { channelsAll } = storeToRefs(channelStore);

  const props = defineProps({
    title: {
      type:String,
      default: 'Еaque ipsa'
    }
  })
  onServerPrefetch(channelStore.getAll)
</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';

  .title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semi-bold);
    text-align: center;

    @include media.media-breakpoint-down (l) {
      font-size: var(--font-size-l);
    }

    @include media.media-breakpoint-down(sm) {
      font-size: 30px;
    }
  }
</style>