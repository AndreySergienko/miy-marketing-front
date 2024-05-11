<template>
  <section class="profile-history-pagination">
    <ProfileHistoryArrow is-disabled />
    <ProfileHistoryPage :page="1" is-active />
    <ProfileHistoryPage :page="2" />
    <ProfileHistoryPage :page="3" />
    <ProfileHistoryPage />
    <ProfileHistoryPage :page="10" />
    <ProfileHistoryArrow is-inversed />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.profile-history-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--ident-l);
  margin-top: var(--ident-4xl);
}
</style>
