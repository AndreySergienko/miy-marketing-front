<template>
  <div class="slot">
    <DefaultSelect
      name="time"
      :options="timeOptions"
      placeholder="Время"
      hide-icon
    />
    <DefaultSelect
      name="intervalId"
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
import type { IFormat } from "~/api/methods/channels/channels.types";
import type { ISlotProps, ISlotEmits } from "./Slot.types";

import { useFormatsStore } from "~/store/formats/formats.store";

const props = defineProps<ISlotProps>();
const { time, intervalId, price } = toRefs(props);

const formatsStore = useFormatsStore();
const { formats } = storeToRefs(formatsStore);

const emit = defineEmits<ISlotEmits>();

const timeOptions = new Array(24).fill(0).map((_, i) => {
  const hour = `${i}`.padStart(2, "0");
  const item = `${hour}:00`;

  return {
    value: item,
    label: item,
  };
});

const intervalOptions = computed(() =>
  formats.value.map((format: IFormat) => ({
    value: format.id,
    label: format.value,
  }))
);

const { values } = useForm({
  initialValues: {
    time: time.value,
    intervalId: intervalId.value,
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
