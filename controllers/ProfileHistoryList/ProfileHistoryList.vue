<template>
  <section class="profile-history-list">
    <ProfileHistoryCard
      v-for="(item, index) in payments"
      :key="index"
      :title="item.name"
      image="/tg.png"
      :price="item.price"
      :id="item.status"
      :date="item.datetime"
    />
  </section>
</template>

<script setup lang="ts">
import { usePaymentsStore } from "~/store/payments/payments.store";

const paymentsStore = usePaymentsStore();
const { payments } = storeToRefs(paymentsStore);
</script>

<style scoped lang="scss">
@use "assets/styles/media";

.profile-history-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--indent-3xl);

  @include media.media-breakpoint-down(l) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media.media-breakpoint-down(md) {
    grid-template-columns: 1fr;
  }
}
</style>
