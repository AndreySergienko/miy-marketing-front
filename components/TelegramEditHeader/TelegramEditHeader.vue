<template>
  <header class="telegram-edit-header">
    <div class="telegram-edit-header__left">
      <NuxtIcon
        class="telegram-edit-header__left-back"
        name="default-round-back"
        filled
        @click="$router.back()"
      />
      <h1 class="telegram-edit-header__left-title">{{ title }}</h1>
    </div>
    <div class="telegram-edit-header__right">
      <DefaultButton
        class="telegram-edit-header__right-discard"
        @click="navigateTo('/personal/telegram')"
      >
        Отмена
      </DefaultButton>
      <DefaultButton
        class="telegram-edit-header__right-create"
        @click="$emit('create')"
      >
        Создать канал
      </DefaultButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import type {
  ITelegramEditHeaderProps,
  ITelegramEditHeaderEmits,
} from "./TelegramEditHeader.types";

defineProps<ITelegramEditHeaderProps>();
defineEmits<ITelegramEditHeaderEmits>();
</script>

<style scoped lang="scss" src="./TelegramEditHeader.scss"></style>
