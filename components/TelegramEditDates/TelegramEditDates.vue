<template>
  <section class="telegram-edit-dates">
    <h2 class="telegram-edit-dates__title">
      Даты для публикаций
      <DefaultTooltip> Для выбора доступно до 12 дат </DefaultTooltip>
    </h2>
    <div class="telegram-edit-dates__content">
      <header class="calendar__header">
        <h2 class="calendar__header-date">{{ templateDate }}</h2>
        <div class="calendar__header-buttons">
          <NuxtIcon
            name="default-calendar-arrow"
            filled
            @click="changeMonth(-1)"
          />
          <NuxtIcon
            class="calendar__header-buttons-right"
            name="default-calendar-arrow"
            filled
            @click="changeMonth(1)"
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
          <span
            v-for="day in templateDays"
            :key="day"
            :class="['calendar__main-days-item', getDayClasses(day)]"
            @click="handleAddDate(day)"
          >
            {{ day }}
          </span>
        </div>
      </main>
      <div class="calendar__divider"></div>
      <footer class="calendar__footer">
        <h3 class="calendar__footer-title">Выбранные даты</h3>
        <div class="calendar__footer-chips">
          <TelegramEditDatesChip
            v-for="(date, index) in values.dates"
            :key="date"
            :date="date"
            @remove="handleRemoveDate(index)"
          />
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

const currentDate = ref<Date>(new Date());
const now = new Date();

const templateDate = computed(() => {
  let month = currentDate.value.toLocaleDateString("ru", {
    month: "long",
  });
  month = month[0].toUpperCase() + month.slice(1);

  return `${month} ${currentDate.value.getFullYear()}`;
});

const templateDays = computed(() => {
  const nullishDate = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    0
  );
  const days = new Array(nullishDate.getDate())
    .fill(null)
    .map((_, index) => index + 1);

  let firstDay =
    new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth(),
      1
    ).getDay() - 1;
  firstDay = firstDay < 0 ? 6 : firstDay;
  days.unshift(...new Array(firstDay).fill(null));

  return days;
});

const getDayClasses = (day: number | null) => {
  const date = day ? getFormattedDate(day) : null;
  return {
    "calendar__main-days-item--disabled": !date,
    "calendar__main-days-item--selected": values.dates.includes(date),
  };
};

const changeMonth = (value: number) => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(currentDate.value.getMonth() + value);

  if (
    newDate.getMonth() < now.getMonth() &&
    newDate.getFullYear() <= now.getFullYear()
  )
    return;
  currentDate.value = newDate;
};

const handleAddDate = (day: number) => {
  const newDate = getFormattedDate(day);
  const alreadyIn = values.dates.includes(newDate);
  const maxedOut = values.dates.length === 12;
  const isOld =
    new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth(),
      day
    ).getTime() < now.getTime();

  if (alreadyIn || maxedOut || isOld) return;

  setFieldValue("dates", [...values.dates, newDate] as never);
};

const handleRemoveDate = (index: number) => {
  const tempDates = [...values.dates];
  tempDates.splice(index, 1);

  setFieldValue("dates", tempDates as never);
};

const getFormattedDate = (day: number) => {
  const formattedDay = String(day).padStart(2, "0");
  const month = String(currentDate.value.getMonth() + 1).padStart(2, "0");
  const year = currentDate.value.getFullYear();

  return `${formattedDay}.${month}.${year}`;
};

const { values, setFieldValue } = useForm({
  initialValues: {
    dates: dates.value,
  },
});

watch(
  () => values,
  () => {
    emit("changeData", values);
  },
  { deep: true }
);

defineExpose({
  handleRemoveDate
})
</script>

<style scoped lang="scss" src="./TelegramEditDates.scss"></style>
