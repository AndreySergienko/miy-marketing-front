<template>
  <div class="telegram-page">
    <ChannelCard v-bind="channelData" @click="showDetails = true" />
    <ChannelAdd v-if="canCreate" @click="addNewChannel" />
    <ChannelDetails v-if="showDetails" v-bind="channelData" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user/user.store";

definePageMeta({
  layout: "personal",
});

const userStore = useUserStore();
const { permissions } = storeToRefs(userStore);

const channelData = {
  id: 1,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s",
  title: "Котики",
  category: "Развлечение",
  subscribers: 1500,
  isActive: false,
  url: "@kotiki",
  dates: [
    {
      date: "08.08.2024",
      slots: [
        {
          time: "10:00",
          format: "1/24",
          price: 400,
        },
        {
          time: "10:00",
          format: "1/24",
          price: 400,
        },
      ],
    },
    {
      date: "09.08.2024",
      slots: [
        {
          time: "10:00",
          format: "1/24",
          price: 400,
        },
        {
          time: "10:00",
          format: "1/24",
          price: 400,
        },
      ],
    },
  ],
};

const showDetails = ref(false);

const canCreate = computed(() => permissions.value.CAN_PUBLIC_CHANNEL);

const addNewChannel = () => navigateTo("/personal/connect");
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
