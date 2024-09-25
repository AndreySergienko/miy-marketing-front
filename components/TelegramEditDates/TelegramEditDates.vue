<template>
  <section class="telegram-edit-dates">
    <h2 class="telegram-edit-dates__title">
      Даты для публикаций
      <DefaultTooltip> Для выбора доступно до 12 дат </DefaultTooltip>
    </h2>
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

const { meta, values } = useForm({
  validationSchema: object({
    dates: array().min(1, "").max(12, "").label(""),
  }),
  initialValues: {
    dates: dates.value,
  },
});

watch(
  () => values,
  () => {
    if (!meta.value.valid) return;
    emit("changeData", values);
  },
  { deep: true }
);
</script>

<style scoped lang="scss" src="./TelegramEditDates.scss"></style>
