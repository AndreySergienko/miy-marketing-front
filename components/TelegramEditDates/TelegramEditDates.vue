<template>
  <section class="telegram-edit-dates">
    <h2 class="telegram-edit-dates__title">
      Даты для публикаций
      <DefaultTooltip> Для выбора доступно до 12 дат </DefaultTooltip>
    </h2>
    <div class="telegram-edit-dates__content">
      <header class="calendar__header">
        <h2 class="calendar__header-date">Август 2024</h2>
        <div class="calendar__header-buttons">
          <NuxtIcon name="default-calendar-arrow" filled />
          <NuxtIcon
            class="calendar__header-buttons-right"
            name="default-calendar-arrow"
            filled
          />
        </div>
      </header>
      <main class="calendar__main">
        <div class="calendar__main-titles">
          <span
            v-for="day in weekDays"
            :key="day"
            class="calendar__main-titles-item"
          >
            {{ day }}
          </span>
        </div>
        <div class="calendar__main-days">
          <span v-for="day in 31" :key="day" class="calendar__main-days-item">
            {{ day }}
          </span>
        </div>
      </main>
      <div class="calendar__divider"></div>
      <footer class="calendar__footer">
        <h3 class="calendar__footer-title">Выбранные даты</h3>
        <div class="calendar__footer-chips">
          <TelegramEditDatesChip date="11.08.2024" />
          <TelegramEditDatesChip date="11.08.2024" />
          <TelegramEditDatesChip date="11.08.2024" />
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { array, object } from "yup";

import type {
  ITelegramEditDatesProps,
  ITelegramEditDatesEmits,
} from "./TelegramEditDates.types";

const props = defineProps<ITelegramEditDatesProps>();
const { dates } = toRefs(props);

const emit = defineEmits<ITelegramEditDatesEmits>();

const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const { meta, values } = useForm({
  validationSchema: object({
    dates: array().min(1, "").max(12, "").label(""),
  }),
  initialValues: {
    dates: dates.value,
  },
});

watch(
  () => values,
  () => {
    if (!meta.value.valid) return;
    emit("changeData", values);
  },
  { deep: true }
);
</script>

<style scoped lang="scss" src="./TelegramEditDates.scss"></style>
