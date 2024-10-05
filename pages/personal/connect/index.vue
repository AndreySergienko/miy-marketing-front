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
      @click="myChannelsStore.check(channelName)"
      id="inputField"
    >
      Проверить
    </SharedButton>
  </main>
</template>

<script setup lang="ts">
import { useMyChannelsStore } from "~/store/myChannels/myChannels.store";

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('inputField').click();
  }
});

definePageMeta({
  layout: "personal",
});

const myChannelsStore = useMyChannelsStore();

const channelName = ref("");
</script>

<style scoped lang="scss" src="./style.scss" />
