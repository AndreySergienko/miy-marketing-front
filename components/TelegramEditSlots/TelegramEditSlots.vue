<template>
  <section class="telegram-edit-slots">
    <h2 class="telegram-edit-slots__title">
      Время публикаций
      <DefaultTooltip> Для выбора доступно до 12 слотов </DefaultTooltip>
    </h2>
    <div class="telegram-edit-slots__content">
      <div v-for="[key, slots] in model" :key="key" class="slots__item">
        <span class="slots__item-title">{{ getSlotTitle(key) }}</span>
        <div class="slots__item-content">
          <TelegramEditSlotsSlot
            v-for="(slot, index) in slots"
            :key="index"
            v-bind="slot"
            @change-data="changeSlotData(key, index, $event)"
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
import {date} from "yup";


const model = defineModel<Map<string, ISlotsItem[]>>();

const getSlotTitle = (key: string) => {
  const slices = key.split(".");
  const date = new Date(+slices[2], +slices[1] - 1, +slices[0]);


  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
};

const handleAddSlot = (key: string) => {
  const slots = model.value.get(key) || [];
  if (slots.length === 12) return;
  slots.push({ time: "" });
};

const changeSlotData = (key: string, index: number, data: ISlotsItem) => {
  const slots = model.value.get(key) || [];
  slots[index] = data;
};

const emit = defineEmits<{ (event: 'remove-last-child', index: number): void }>()


const handleRemoveSlot = (key: string, index: number) => {
  const slots = model.value.get(key) || [];
  if (slots.length === 1) {
    emit('remove-last-child', index)
  }
  slots.splice(index, 1);
};




</script>

<style scoped lang="scss" src="./TelegramEditSlots.scss"></style>
