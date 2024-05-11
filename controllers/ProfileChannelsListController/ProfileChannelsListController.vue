<template>
  <section class="profile-channels-list">
    <ProfileChannelsItem
      v-for="item in 2"
      :key="item"
      title="Название канала"
      :status="EProfileChannelsItemTypes.REJECTED"
      status-tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      @edit="console.log('edit')"
      @retry="console.log('retry')"
      @delete="console.log('delete')"
    />
    <ProfileChannelsItem
      v-for="item in 2"
      :key="item"
      title="Название канала"
      :status="EProfileChannelsItemTypes.DONE"
      @edit="console.log('edit')"
      @retry="console.log('retry')"
      @delete="console.log('delete')"
    />
    <ProfileChannelsItem
      v-for="item in 2"
      :key="item"
      title="Название канала"
      :status="EProfileChannelsItemTypes.MODERATING"
      @edit="console.log('edit')"
      @retry="console.log('retry')"
      @delete="console.log('delete')"
    />
    <ProfileChannelsItem
      v-for="item in 2"
      :key="item"
      title="Название канала"
      :status="EProfileChannelsItemTypes.AVAILABLE"
      @edit="console.log('edit')"
      @retry="console.log('retry')"
      @delete="console.log('delete')"
    />
  </section>
</template>

<script setup lang="ts">
import { EProfileChannelsItemTypes } from "~/components/ProfileChannelsItem/ProfileChannelsItem.types";
</script>

<style scoped lang="scss">
.profile-channels-list {
  display: flex;
  flex-direction: column;
  gap: var(--ident-2xl);
  margin-top: var(--ident-2xl);
}
</style>
