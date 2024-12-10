<template>
  <div class="telegram-page">
    <div v-if="!channels.length && !canCreate" class="telegram-page__empty">
        <p>Заполните данные для дальнейшей работы</p>
        <DefaultButton class="telegram-page__button" @click="returnProfile">
          Заполнить здесь
        </DefaultButton>
    </div>
    <div v-else class="telegram-page__content">
      <ChannelCard
        v-for="channelData in channels"
        :key="channelData.id"
        v-bind="channelData"
        :category="getCategoryById(channelData.categoryId)"
        @click="handleClickCard(channelData)"
      />
      <ChannelAdd v-if="canCreate" @click="addNewChannel" />
      <Teleport to="#teleports">
        <ChannelDetails
          v-if="showDetails && selectedChannel"
          v-bind="selectedChannel"
          :dates="getFormattedDates(selectedChannel.dates)"
          :category="getCategoryById(selectedChannel.categoryId)"
          @close="handleCloseDetails"
        >
          <template #actions="{ handleEdit }">
            <DefaultButton
              class="telegram-page__content-footer-edit"
              @click="handleEdit"
            >
              Редактировать
            </DefaultButton>
            <DefaultButton
              class="telegram-page__content-footer-close"
              @click="handleCloseDetails"
            >
              Закрыть
            </DefaultButton>
          </template>
        </ChannelDetails>
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  IMyChannel,
  IMyChannelDate,
} from "~/store/myChannels/myChannels.types";
import type { ICategoriesItem } from "~/api/methods/categories/categories.types";
import { useCategoriesStore } from "~/store/categories/categories.store";
import { useMyChannelsStore } from "~/store/myChannels/myChannels.store";
import { useUserStore } from "~/store/user/user.store";
import { useFormatsStore } from "~/store/formats/formats.store";
import { useRouter } from 'vue-router';
import { useFormattedDates } from "~/composables/useFormattedDates";

 const router = useRouter();

function returnProfile () {
  router.push('/personal/profile');
}

definePageMeta ({
  layout: "personal",
});

const userStore = useUserStore();
const { permissions } = storeToRefs(userStore);

const myChannelsStore = useMyChannelsStore();
const { channels, selectedChannel } = storeToRefs(myChannelsStore);

const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

const formatsStore = useFormatsStore();
const { formats } = storeToRefs(formatsStore);

await useAsyncData(
  "my-channels",
  () => {
    return Promise.allSettled([
      formatsStore.fetch(),
      categoriesStore.fetch(),
      myChannelsStore.fetch(),
    ]);
  },
  {
    lazy: true,
  }
);

const showDetails = ref(false);

const canCreate = computed(() => permissions.value.CAN_PUBLIC_CHANNEL);

const getCategoryById = computed(() => (id: number) => {
  const category = categories.value.find(
    (category: ICategoriesItem) => category.id === id
  );
  return category ? category.title : "";
});

const {getFormattedDates} = useFormattedDates(formats);

const handleClickCard = (channel: IMyChannel) => {
  selectedChannel.value = channel;
  showDetails.value = true;
};

const handleCloseDetails = () => {
  selectedChannel.value = null;
  showDetails.value = false;
};

const addNewChannel = () => navigateTo("/personal/connect");
</script>

<style scoped lang="scss">
@use "assets/styles/media";

.telegram-page {
  margin-top: 24px;

  @include media.media-breakpoint-up(md) {
    margin-top: 21px;
  }

  &__button {
    margin-top: 25px;
  }

  &__empty {
    display: flex;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @include media.media-breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media.media-breakpoint-up(lm) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media.media-breakpoint-up(xxl) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__content-footer {
    display: none;

    @include media.media-breakpoint-up(md) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 60px;
      padding-bottom: 50px;
    }

    &-close {
      background: transparent;
      color: #717d96;
      transition: color 0.3s ease-in-out;

      &:hover,
      &:active {
        background: transparent;
        color: rgb(113, 125, 150, 0.5);
      }
    }
  }
}
</style>
