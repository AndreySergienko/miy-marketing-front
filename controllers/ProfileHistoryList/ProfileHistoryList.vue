<template>
  <section class="profile-history-list">
    <ProfileHistoryCard
      v-for="(item, index) in payments"
      :key="index"
      :title="item.name"
      image="/tg.png"
      :price="item.price"
      :id="index"
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
.profile-history-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ident-adaptive-xl);
}
</style>
