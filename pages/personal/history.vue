<template>
  <div class="history container">
    <div class="history__inner">
      <ProfileHistoryList />
      <ProfileHistoryPagination v-if="pages && pages > 1" />
    </div>
  </div>
</template>

<script setup>
import ProfileHistoryList from "~/controllers/ProfileHistoryList/ProfileHistoryList.vue";
import ProfileHistoryPagination from "~/controllers/ProfileHistoryPagination/ProfileHistoryPagination.vue";
import { usePaymentsStore } from "~/store/payments/payments.store";

definePageMeta({
  layout: "personal",
});

const paymentsStore = usePaymentsStore();
await useAsyncData("payments-all", () => paymentsStore.getAll());
</script>

<style scoped lang="scss">
.history {
  &__inner {
    margin: 86px 0;
  }
}
</style>
