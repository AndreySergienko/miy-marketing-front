<template>
  <div class="slot">
    <DefaultSelect
      name="time"
      :options="timeOptions"
      placeholder="Время"
      hide-icon
    />
    <DefaultSelect
      name="interval"
      :options="intervalOptions"
      placeholder="Интервал"
      hide-icon
    />
    <AuthenticationInput type="text" name="price" placeholder="Цена" />
    <NuxtIcon
      class="slot__icon"
      name="file-input-remove"
      filled
      @click="$emit('remove')"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISlotProps, ISlotEmits } from "./Slot.types";

const props = defineProps<ISlotProps>();
const { time, interval, price } = toRefs(props);

const emit = defineEmits<ISlotEmits>();

const timeOptions = new Array(24).fill(0).map((_, i) => {
  const hour = `${i}`.padStart(2, "0");
  const item = `${hour}:00`;

  return {
    value: item,
    label: item,
  };
});

const intervalOptions = [
  {
    value: "1",
    label: "1/24",
  },
  {
    value: "2",
    label: "2/48",
  },
];

const { values } = useForm({
  initialValues: {
    time: time.value,
    interval: interval.value,
    price: price.value,
  },
});

watch(
  () => values,
  (newValues) => {
    emit("changeData", newValues);
  },
  { deep: true }
);
</script>

<style scoped lang="scss" src="./Slot.scss"></style>
