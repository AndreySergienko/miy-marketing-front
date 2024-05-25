<template>
  <main class="connect container">
    <NuxtIcon class="connect__icon" name="connect-eye" filled />
    <SharedTitle class="connect__title">Подключение TG-бота</SharedTitle>
    <span class="connect__description">
      Просим вас подключить TG-бота ON-DEVELOPER. Для этого нажмите “Проверить”
      для дальнейшего размещения канала на платформе
    </span>
    <SharedInput
      class="connect__input"
      name="channelName"
      type="text"
      v-model="channelName"
    >
      Название канала
    </SharedInput>
    <SharedButton
      class="connect__button"
      size="l"
      color="blue"
      :is-disabled="!channelName"
      @click="channelsStore.check(channelName)"
    >
      Проверить
    </SharedButton>
  </main>
</template>

<script setup lang="ts">
import { useChannelStore } from "~/store/channel/channel.store";

definePageMeta({
  layout: "personal",
});

const channelsStore = useChannelStore();

const channelName = ref("");
</script>

<style scoped lang="scss" src="./style.scss" />
