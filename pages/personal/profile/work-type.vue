<template>
  <main class="work-type-page">
    <header class="work-type__header">
      <NuxtIcon
        class="work-type__header-back"
        name="page-back"
        filled
        @click="$router.back()"
      />
      <div class="work-type__header-content">
        <h2 class="work-type__header-content--title">Ваш статус</h2>
        <p :class="['work-type__header-content--status', status.className]">
          {{ status.text }}
        </p>
      </div>
      <DefaultButton class="work-type__header-button">Сохранить</DefaultButton>
    </header>
    <ProfileWorkTypeContent />
  </main>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

definePageMeta({
  layout: "work-type",
});

const isMobile = useMediaQuery("(max-width: 768px)");

const status = computed(() => ({
  text: "Подтвержден",
  className: "accept",
}));

watch(
  isMobile,
  (value) => {
    if (value) return;
    return navigateTo("/personal/profile");
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss">
.work-type {
  &__header {
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 16px;
    background: var(--new-white);
    border-bottom: 1px solid var(--color-light-gray);

    &-back {
      width: 24px;
      height: 24px;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 8px;

      &--title {
        font-size: 15px;
        font-weight: 700;
        line-height: 19px;
        color: #2d3648;
      }

      &--status {
        font-size: 13px;
        font-weight: 500;
        line-height: 9px;
      }
    }

    &-button {
      margin-left: auto;
    }

    :deep(.nuxt-icon) {
      svg {
        width: unset;
        height: unset;
        margin-bottom: unset;
        vertical-align: unset;
      }
    }
  }
}

:deep(.profile-work-type-content) {
  padding: 30px 16px 80px;
}
</style>
