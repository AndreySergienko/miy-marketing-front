<template>
  <div class="telegram container">
    <div class="telegram__top">
      <SharedTitle class="telegram__top-title">
        Размещение TG-каналов
      </SharedTitle>
      <div class="telegram__buttons">
        <SharedTooltip
          :is-active="isTooltipActive"
          class="telegram__tooltip"
          text="Необходимо зарегестрировать карту для возврата средств, в случае отмены публикации"
          border-color="#ffd0d0"
        />
        <SharedButton
          class="telegram__top-button"
          color="blue"
          :is-disabled="isDisabledButton"
          size="l"
          @click="navigateTo('/personal/connect')"
          @pointerover="isDisabledButton && (isTooltipActive = true)"
          @pointerleave="isDisabledButton && (isTooltipActive = false)"
        >
          Опубликовать TG-канал
        </SharedButton>
      </div>
    </div>
    <ProfileChannelsListController />
  </div>
</template>

<script setup lang="ts">
import ProfileChannelsListController from "~/controllers/ProfileChannelsListController/ProfileChannelsListController.vue";
import { useUserStore } from "~/store/user/user.store";

definePageMeta({
  layout: "personal",
});

const userStore = useUserStore();
const { permissions } = storeToRefs(userStore);
const isTooltipActive = ref(false);
const isDisabledButton = !permissions.value.CAN_PUBLIC_CHANNEL
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
.telegram {
  margin-top: var(--indent-2xl);
  margin-bottom: 30px;

  &__buttons {
    position: relative;
  }

  &__tooltip {
    top: 65px;
    border-radius: 10px;
    text-align: center;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--indent-l) 0 var(--indent-3xl);
    border-bottom: 2px solid var(--color-dark-gray);

    @include media.media-breakpoint-down(sm) {
      flex-direction: column;
      text-align: center;
    }

    &-title {
      margin: 0;

      @include media.media-breakpoint-down(sm) {
        width: 225px;
        margin-bottom: var(--indent-xl);
      }
    }

    &-button {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      padding: var(--indent-l) var(--indent-3xl);
    }
  }
}
</style>
