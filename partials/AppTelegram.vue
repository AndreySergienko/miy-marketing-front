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
            @buy="setInfoChannel(card.slots)"
          >
            <template #title>
              <SharedCardTitle>{{ card.channel.name }}</SharedCardTitle>
            </template>
            <template #description>
              <SharedCardText>{{ card.channel.description }}</SharedCardText>
            </template>
          </SharedCard>
        </div>
      </div>
    </div>

    <SharedModal v-if="activeSlots.length" @close="clearInfoChannel">
      <SharedSelect
        title="Выбрать время"
        :selected="slotId"
        :options="times"
        @select="slotId = $event"
      />
      <SharedButton @click="buy">Купить</SharedButton>
    </SharedModal>

    <div class="more">
      <p class="more__text" @click="incrementPage">Смотреть еще</p>
      <nuxt-icon class="more__icon" name="arrow" filled />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useChannelStore } from "~/store/channel/channel.store";
  import {useBuyChannel} from "~/composobles/useBuyChannel";
  import {usePagination} from "~/composobles/usePagination";
  import {useCategoriesStore} from "~/store/categories/categories.store";

  const channelStore = useChannelStore();
  const { channelsAll } = storeToRefs(channelStore);
  const { clearInfoChannel, setInfoChannel, slotId, times, activeSlots } = useBuyChannel()

  const buy = async () => {
    await channelStore.buy(+slotId.value)
    clearInfoChannel()
  }

  /** pagination **/
  const { paginationQuery, incrementPage } = usePagination()
  /** categories **/
  const categoriesStore = useCategoriesStore()

  watch([paginationQuery, categoriesStore.getQueryCategories], async () => {
    const fullPath = categoriesStore.getQueryCategories ? paginationQuery.value + '&' + categoriesStore.getQueryCategories  : paginationQuery.value
    await channelStore.getAll(fullPath)
  }, { deep: true })

  useAsyncData(() => channelStore.getAll(paginationQuery.value))
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

   .more {
     margin-bottom: 100px;

     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;

     &__text {
       font-size: var(--font-size-m);
       font-weight: var(--font-weight-medium);
       margin-right: var(--indent-s);

       @include media.media-breakpoint-down(sm) {
         font-size: var(--font-size-s);
       }
     }

     &__icon {
       font-size: var(--font-size-m);
     }
   }
</style>
