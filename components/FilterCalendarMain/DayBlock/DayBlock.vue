<template>
  <div :class="['day-block', classes]">
    <span class="day-block__number">{{ day.number }}</span>
    <span class="day-block__week">{{ day.inWeek }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IDayBlockProps } from "./DayBlock.types";

const props = defineProps<IDayBlockProps>();
const { isCurrent, isSelected } = toRefs(props);

const classes = computed(() => ({
  "day-block__current": isCurrent.value,
  "day-block__selected": isSelected.value,
}));
</script>

<style scoped lang="scss" src="./DayBlock.scss" />
