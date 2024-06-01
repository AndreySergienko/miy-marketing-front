<template>
  <div class="tg" id="telegram">
    <div class="container">
      <div class="tg__inner">
        <div class="tg__text">
          <SharedTitle>Telegram-каналы</SharedTitle>
          <SharedText
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SharedText>
        </div>
        <div class="card__list">
          <SharedCard
            v-for="card in channelsAll"
            :key="card.channel.id"
            :price= "card.channel.price"
            :people="card.channel.subscribers"
            :clock="card.channel.day"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useChannelStore } from "~/store/channel/channel.store";

  const channelStore = useChannelStore();
  const { channelsAll } = storeToRefs(channelStore);

  useAsyncData(channelStore.getAll)
</script>

<style scoped lang="scss">
   @use 'assets/styles/media';
  .tg {
    padding-top: 150px;
    margin-top: -50px;
    -webkit-background-clip: content-box;
    background-clip: content-box;

    margin-bottom: var(--indent-4xl);

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &__text {
      width: 50%;
      text-align: center;
      margin-bottom: var(--indent-4xl);

      @include media.media-breakpoint-down(sm) {
        width: 95%;
      }
    }
  }

  .card__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--indent-2xl);

    @include media.media-breakpoint-down(xl) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media.media-breakpoint-down(md) {
      padding: 0 var(--indent-2xl);
      grid-template-columns: repeat(2, 1fr);
    }

    @include media.media-breakpoint-down(sm) {
      padding: 0 150px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
