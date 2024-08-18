<template>
  <div class="filter-calendar-main">
    <div class="filter-calendar-main__calendar">
      <div
        v-for="month in getMonthsFromToday()"
        :key="month.index"
        class="filter-calendar-main__calendar-month"
      >
        <span class="filter-calendar-main__calendar-month__title">
          {{ month.name }}
        </span>
        <div class="filter-calendar-main__calendar-month__content">
          <FilterCalendarMainDayBlock
            v-for="day in getDaysByMonth(month.index)"
            :key="day.number"
            :day="day"
            :is-current="isCurrentDay(day.date)"
            :is-selected="isSelected(day.date)"
            @select-triggered="$emit('selectDate', day.date)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  IFilterCalendarMainProps,
  IFilterCalendarMainEmits,
} from "./FilterCalendarMain.types";
import { getDaysByMonth, getMonthsFromToday } from "./FilterCalendarMain.data";

const props = defineProps<IFilterCalendarMainProps>();
const { selectedDates } = toRefs(props);

defineEmits<IFilterCalendarMainEmits>();

const isCurrentDay = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date.getTime() === today.getTime();
};

const isSelected = (date: Date): boolean => {
  return selectedDates.value.some(
    (range) =>
      range.start.getTime() === date.getTime() ||
      range.end?.getTime() === date.getTime()
  );
};
</script>

<style scoped lang="scss" src="./FilterCalendarMain.scss" />
