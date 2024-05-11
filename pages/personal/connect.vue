<template>
  <main class="connect container">
    <NuxtIcon class="connect__icon" name="connect-eye" filled />
    <SharedTitle class="connect__title">Подключение TG-бота</SharedTitle>
    <span class="connect__description">
      Просим вас подключить TG-бота ON-DEVELOPER. Для этого нажмите “Проверить”
      для дальнейшего размещения канала на платформе
    </span>
    <SharedButton class="connect__button" size="l" color="blue">
      Проверить
    </SharedButton>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "personal",
});
</script>

<style scoped lang="scss">
.connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ident-xs);
  margin-top: var(--ident-adaptive-xl);
  margin-bottom: var(--ident-xxxl);

  &__icon {
    width: 200px;
    height: 200px;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    margin: 0;
  }

  &__description {
    width: 748px;
    text-align: center;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
  }

  &__button {
    padding: var(--ident-l) 48px;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
  }
}
</style>
