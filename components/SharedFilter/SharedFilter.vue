<template>
  <div class="filter">
    <div class="filter__inner">
      <!-- Интервал -->
      <div class="filter__item" v-if="props.title === 'интервал'">
        <SharedSelect
          :title="props.title"
          :selected="String(internalValue)"
          :options="intervalOptions"
          filter
          @select="updateValue($event)"
        />
      </div>

      <!-- Цена или Подписчики -->
      <div class="filter__item" v-else-if="props.title === 'цена' || props.title === 'подписчики'">
        <div class="filter__item-title">{{ props.title }}</div>
        <div class="filter__item-form">
          <AuthenticationInput
            v-model="internalValue.from"
            :name="`${props.title}-from`"
            type="text"
            placeholder="от"
          />
          <AuthenticationInput
            v-model="internalValue.to"
            :name="`${props.title}-to`"
            type="text"
            placeholder="до"
          />
        </div>
      </div>

      <!-- Время -->
      <div class="filter__item" v-else-if="props.title === 'время'">
        <div class="filter__item-title">{{ props.title }}</div>
        <div class="filter__item-form">
          <AuthenticationInput
            v-model="timeFrom"
            :name="`${props.title}-from`"
            type="time"
            placeholder="с"
          />
          <AuthenticationInput
            v-model="timeTo"
            :name="`${props.title}-to`"
            type="time"
            placeholder="по"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SharedInput from "../SharedInput/SharedInput.vue";
import SharedSelect from "../SharedSelect/SharedSelect.vue";
import type { ISharedFilterProps, ISharedFilterRang } from "./SharedFilter.types";
import type { ISharedSelectOption } from "../SharedSelect/SharedSelect.types";
import AuthenticationInput from "../AuthenticationInput/AuthenticationInput.vue";

const props = defineProps<ISharedFilterProps>();
const emit = defineEmits(["update:modelValue"]);

const internalValue = ref<ISharedFilterRang>({ from: "", to: "" });

const intervalOptions: ISharedSelectOption[] = [
  { value: "1/24", title: "1/24" },
  { value: "1/48", title: "1/48" },
  { value: "30/24", title: "30/24" },
];

const timeFrom = ref<string>("");
const timeTo = ref<string>("");

// Преобразование времени в timestamp
const timeToTimestamp = (time: string): number => {
  if (!time) return 0;
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60;
};

// Обновление значений времени
watch([timeFrom, timeTo], ([from, to]) => {
  internalValue.value = {
    from: timeToTimestamp(from),
    to: timeToTimestamp(to),
  };
  emit("update:modelValue", internalValue.value);
});

// Обновление значения фильтра
const updateValue = (value: string | { from: string; to: string }) => {
  internalValue.value = value;
  emit("update:modelValue", value);
};

watch(
  internalValue.value,
  (newValue) => {
    emit("update:modelValue", newValue);
  },
  { deep: true }
);
</script>


<style scoped lang="scss">
  .filter {
    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &-title {
        font-size: var(--font-size-m);
      }

      &-form {
        display: flex;
        flex-direction: column;
        gap: var(--indent-m);
      }
    }
  }
</style>
