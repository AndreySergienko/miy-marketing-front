<template>
  <section class="telegram-edit-slots">
    <h2 class="telegram-edit-slots__title">
      Время публикаций
      <DefaultTooltip> Для выбора доступно до 12 слотов </DefaultTooltip>
    </h2>
    <div class="telegram-edit-slots__content">
      <div v-for="[key, slots] in model" :key="key" class="slots__item">
        <span class="slots__item-title">{{ key }}</span>
        <div class="slots__item-content">
          <TelegramEditSlotsSlot
            v-for="(slot, index) in slots"
            :key="index"
            v-bind="slot"
            @remove="handleRemoveSlot(key, index)"
          />
        </div>
        <span class="slots__item-add" @click="handleAddSlot(key)">
          Добавить слот
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ISlotsItem } from "./TelegramEditSlots.types";

const model = defineModel<Map<string, ISlotsItem[]>>();

const handleAddSlot = (key: string) => {
  const slots = model.value.get(key) || [];
  slots.push({ time: "", interval: "", price: 0 });
};

const handleRemoveSlot = (key: string, index: number) => {
  const slots = model.value.get(key) || [];
  slots.splice(index, 1);
};
</script>

<style scoped lang="scss" src="./TelegramEditSlots.scss"></style>
