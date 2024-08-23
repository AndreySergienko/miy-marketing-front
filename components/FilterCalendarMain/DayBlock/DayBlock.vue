<template>
  <div ref="root" :class="['day-block', classes]" @click="handleClick">
    <span class="day-block__number">{{ day.number }}</span>
    <span class="day-block__week">{{ day.inWeek }}</span>
  </div>
</template>

<script setup lang="ts">
import { IDayBlockEmits, type IDayBlockProps } from "./DayBlock.types";

const props = defineProps<IDayBlockProps>();
const { isCurrent, isSelected } = toRefs(props);

const emit = defineEmits<IDayBlockEmits>();

const root = ref<HTMLDivElement>();

const classes = computed(() => ({
  "day-block__current": isCurrent.value,
  "day-block__selected": isSelected.value,
}));

const handleClick = () => {
  if (isSelected.value || !root.value) return;
  emit("selectTriggered", root.value);
};
</script>

<style scoped lang="scss" src="./DayBlock.scss" />
