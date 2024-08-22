<template>
  <section class="filter-calendar">
    <h1 class="filter-calendar__title">Доступные даты для публикаций</h1>
    <div class="filter-calendar__content">
      <div class="filter-calendar__content-reset" @click="calendarStore.reset">
        Сбросить все
      </div>
      <FilterCalendarMain
        :selected-range="range"
        @select-date="calendarStore.selectDate"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCalendarStore } from "~/store/filters/calendar.store";

const calendarStore = useCalendarStore();
const { range } = storeToRefs(calendarStore);
</script>

<style scoped lang="scss" src="./FilterCalendarController.scss" />
