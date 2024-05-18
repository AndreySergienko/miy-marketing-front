<template>
  <section class="profile-channels-list">
    <ProfileChannelsItem
      v-for="item in channels"
      :key="item.id"
      :title="item.name"
      :status="item.status"
      status-tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      @edit="console.log('edit')"
      @retry="console.log('retry')"
      @delete="console.log('delete')"
    />
  </section>
</template>

<script setup lang="ts">
import { EProfileChannelsItemTypes } from "~/components/ProfileChannelsItem/ProfileChannelsItem.types";
import { useChannelStore } from "~/store/channel/channel.store";

const channelStore = useChannelStore();
const { channels } = storeToRefs(channelStore);

await useAsyncData("channels", () => channelStore.getAll());
</script>

<style scoped lang="scss">
.profile-channels-list {
  display: flex;
  flex-direction: column;
  gap: var(--indent-2xl);
  margin-top: var(--indent-2xl);
}
</style>
