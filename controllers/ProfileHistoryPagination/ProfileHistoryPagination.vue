<template>
  <section class="profile-history-pagination">
    <ProfileHistoryArrow
      :is-disabled="currentPageFormatted === 1"
      @click="goToPage(currentPageFormatted - 1)"
    />
    <ProfileHistoryPage
      v-for="page in pagesSlice"
      :key="page"
      :page="page"
      :is-active="page === currentPageFormatted"
      @click="goToPage(page)"
    />
    <ProfileHistoryPage v-if="hasMorePages" />
    <ProfileHistoryPage
      v-if="hasMorePages"
      :page="pagesAmount"
      @click="goToPage(pagesAmount)"
    />
    <ProfileHistoryArrow
      is-inversed
      :is-disabled="currentPageFormatted === pages"
      @click="goToPage(currentPageFormatted + 1)"
    />
  </section>
</template>

<script setup lang="ts">
import { usePaymentsStore } from "~/store/payments/payments.store";

const route = useRoute();
const { page: currentPage } = route.query;

const paymentStore = usePaymentsStore();
const { pages } = storeToRefs(paymentStore);

const pagesAmount = computed(() => pages.value || 0);
const currentPageFormatted = computed(() => Number(currentPage) || 1);

const hasMorePages = computed(
  () => pagesAmount.value > currentPageFormatted.value + 2
);

const pagesSlice = computed(() => {
  const result = [];

  for (let i = 0; i < 3; i++) {
    const nextPage = currentPageFormatted.value + i;
    if (nextPage > pagesAmount.value) break;

    result.push(nextPage);
  }

  return result;
});

const goToPage = (page: number) =>
  navigateTo({ path: "/profile/history", query: { page } });
</script>

<style scoped lang="scss">
.profile-history-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--indent-l);
  margin-top: var(--indent-4xl);
}
</style>
