<template>
  <div class="history container">
    <div class="history__inner">
      <ProfileHistoryList />
      <ProfileHistoryPagination />
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
    margin: var(--ident-adaptive-xxxl) 0;
  }
}
</style>
