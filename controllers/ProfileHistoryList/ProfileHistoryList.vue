<template>
  <section class="profile-history-list">
    <ProfileHistoryCard
      v-for="index in 12"
      :key="index"
      title="Название канала"
      image="/tg.png"
      :price="3000"
      :id="1"
      :date="new Date().toLocaleDateString('ru')"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.profile-history-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ident-adaptive-xl);
}
</style>
