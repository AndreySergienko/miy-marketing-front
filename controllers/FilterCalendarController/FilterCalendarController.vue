<template>
  <section class="filter-calendar">
    <h1 class="filter-calendar__title">Доступные даты для публикаций</h1>
    <div class="filter-calendar__content">
      <div class="filter-calendar__content-reset" @click="calendarStore.reset" v-if="dates.length > 0">
        Сбросить все
      </div>
      <FilterCalendarMain
        :selected-dates="dates"
        @select-date="calendarStore.selectDate"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCalendarStore } from "~/store/filters/calendar.store";

const calendarStore = useCalendarStore();
const { dates } = storeToRefs(calendarStore);
</script>

<style scoped lang="scss" src="./FilterCalendarController.scss" />
