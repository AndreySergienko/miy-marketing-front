<template>
  <div class="channel-card">
    <div class="channel-card__more" v-outside-click="hideMoreMenu">
      <NuxtIcon
        name="channel-card-dots"
        filled
        @click.stop.prevent="toggleMoreMenu"
      />
      <ChannelCardMoreMenu
        :is-active="showMoreMenu"
        @edit="handleEdit"
        @delete="emits('delete', id)"
      />
    </div>
    <NuxtImg class="channel-card__image" :src="image" />
    <div class="channel-card__content">
      <h2 class="channel-card__content-title">{{ title }}</h2>
      <p class="channel-card__content-category">{{ category }}</p>
      <p class="channel-card__content-subscribers">
        {{ formattedSubscribers }}
      </p>
    </div>
    <span :class="['channel-card__status', statusData.className]">
      {{ statusData.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {IChannelCardEmits, IChannelCardProps} from "./ChannelCard.types";

const props = defineProps<IChannelCardProps>();
const emits = defineEmits<IChannelCardEmits>()
const { id, subscribers, isActive } = toRefs(props);

const showMoreMenu = ref(false);

const formattedSubscribers = computed(() => {
  return `${subscribers.value.toLocaleString()} подписчиков`;
});

const statusData = computed(() => {
  return {
    text: isActive.value ? "Активно" : "Неактивно",
    className: `channel-card__status--${
      isActive.value ? "active" : "inactive"
    }`,
  };
});

const toggleMoreMenu = () => {
  showMoreMenu.value = !showMoreMenu.value;
};

const hideMoreMenu = () => {
  showMoreMenu.value = false;
};

const handleEdit = () => navigateTo(`/personal/telegram/edit/${id.value}`);
</script>

<style scoped lang="scss" src="./ChannelCard.scss"></style>
