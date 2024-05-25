<template>
  <div class="profile-history-card">
    <div class="profile-history-card__top">
      <div class="profile-history-card__top-image">
        <NuxtImg v-if="image" :src="image" :alt="title" />
      </div>
      <span class="profile-history-card__top-title">{{ title }}</span>
    </div>
    <div class="profile-history-card__bottom">
      <ProfileHistoryCardBottomItem title="Дата" :text="date" />
      <ProfileHistoryCardBottomItem title="Стоимость" :text="formattedPrice" />
      <ProfileHistoryCardBottomItem title="ID" :text="formattedId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProfileHistoryCardProps } from "./ProfileHistoryCard.types";

const props = defineProps<IProfileHistoryCardProps>();
const { id, price } = toRefs(props);

const IDS = {
  PAID: "Оплачено",
  CANCEL: "Отменено",
};

const formattedId = computed(() => {
  if (!id.value || !(id.value in IDS)) return "";
  return IDS[id.value as keyof typeof IDS];
});
const formattedPrice = computed(() => price.value.toLocaleString("ru"));
</script>

<style lang="scss" scoped>
.profile-history-card {
  padding: var(--indent-2xl);
  border: 2px solid var(--color-light-gray);
  border-radius: var(--indent-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--indent-3xl);

  &__top {
    display: flex;
    align-items: center;
    gap: var(--indent-3xl);

    &-image {
      flex: 0 0 115px;
      aspect-ratio: 1 / 1;
      border-radius: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-title {
      font-size: var(--font-size-l);
      font-weight: var(--font-weight-semi-bold);
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }
}
</style>
