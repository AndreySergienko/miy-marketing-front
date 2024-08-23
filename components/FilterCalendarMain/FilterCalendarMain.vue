<template>
  <div ref="calendarDiv" class="filter-calendar-main">
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
            @select-triggered="handleSelectTrigger($event, day.date)"
          />
        </div>
      </div>
    </div>
    <div
      :class="['filter-calendar-main__selection', selectionClass]"
      :style="selectionStyles"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type {
  IFilterCalendarMainProps,
  IFilterCalendarMainEmits,
} from "./FilterCalendarMain.types";
import { getDaysByMonth, getMonthsFromToday } from "./FilterCalendarMain.data";

const props = defineProps<IFilterCalendarMainProps>();
const { selectedRange } = toRefs(props);

const emit = defineEmits<IFilterCalendarMainEmits>();

const calendarDiv = ref<HTMLDivElement>();
const selectionDivs = ref<HTMLDivElement[]>([]);

const selectionStyles = computed(() => {
  if (!calendarDiv.value) return;
  if (selectionDivs.value.length !== 2) return;

  const [first, second] = selectionDivs.value;
  const firstRect = first.getBoundingClientRect();
  const secondRect = second.getBoundingClientRect();

  const minRectLeft = Math.min(firstRect.left, secondRect.left);
  const maxRectWidth = Math.max(firstRect.width, secondRect.width);
  const leftOffset =
    calendarDiv.value.scrollLeft + minRectLeft + maxRectWidth / 2;

  return {
    "--left": `${leftOffset}px`,
    "--width": `${Math.abs(secondRect.left - firstRect.left)}px`,
    "--height": `${firstRect.height}px`,
  };
});

const selectionClass = computed(() => ({
  "filter-calendar-main__selection--active": selectionStyles.value,
}));

const isCurrentDay = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date.getTime() === today.getTime();
};

const isSelected = (date: Date): boolean => {
  if (!selectedRange.value) return false;

  const isStart = selectedRange.value.start.getTime() === date.getTime();
  const isEnd = selectedRange.value.end?.getTime() === date.getTime();
  return isStart || isEnd;
};

const handleSelectTrigger = (element: HTMLDivElement, date: Date) => {
  emit("selectDate", date);

  if (selectionDivs.value.length === 2) {
    selectionDivs.value = [element];
    return;
  }

  selectionDivs.value.push(element);
};

watch(
  selectedRange,
  (newRange) => {
    if (newRange) return;
    selectionDivs.value = [];
  },
  {
    deep: true,
  }
);
</script>

<style scoped lang="scss" src="./FilterCalendarMain.scss" />
