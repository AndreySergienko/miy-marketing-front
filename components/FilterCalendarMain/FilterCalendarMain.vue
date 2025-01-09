<template>
  <div class="filter-calendar-main">
    <div class="filter-calendar-main__action-prev" @click="prevMonths">
      <nuxt-icon name="default-round-back" filled/>
    </div>
    <div class="filter-calendar-main__calendar">
      <div
        v-for="month in visibleMonths"
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
    <div class="filter-calendar-main__action-next" @click="nextMonths">
      <nuxt-icon name="default-round-next" filled/>
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

const emit = defineEmits<IFilterCalendarMainEmits>();

const isCurrentDay = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date.getTime() === today.getTime();
};

const isSelected = (date: Date): boolean => {
  if (!selectedDates.value.length) return false;

  const dateIndex = selectedDates.value.findIndex(
    (item) => item.getTime() === date.getTime()
  );
  return dateIndex !== -1;
};

const currentMonthIndex = ref(0)

const months = getMonthsFromToday()

const visibleMonths = computed(() => [months[currentMonthIndex.value]])
// console.log("Месяц", currentMonthIndex.value)

const prevMonths = () => {
  if(currentMonthIndex.value > 0) {
    currentMonthIndex.value--
  }
}

const nextMonths = () => {
  if(currentMonthIndex.value < months.length - 1) {
    currentMonthIndex.value++
  }
}
</script>

<style scoped lang="scss" src="./FilterCalendarMain.scss" />
