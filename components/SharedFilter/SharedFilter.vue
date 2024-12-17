<template>
  <div class="filter">
    <div class="filter__inner">
      <!-- Интервал -->
      <div v-if="props.title === 'интервал'">
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
          <SharedInput
            v-model="internalValue.from"
            :name="`${props.title}-from`"
            type="text"
            placeholder="от"
          />
          <SharedInput
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
          <SharedInput
            v-model="formattedValue.from"
            :name="`${props.title}-from`"
            type="datetime-local"
            placeholder="с"
            @input="onTimeInput('from', $event)"
          />
          <SharedInput
            v-model="formattedValue.to"
            :name="`${props.title}-to`"
            type="datetime-local"
            placeholder="по"
            @input="onTimeInput('to', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SharedInput from "../SharedInput/SharedInput.vue";
import SharedSelect from "../SharedSelect/SharedSelect.vue";
import type { ISharedFilterProps } from "./SharedFilter.types";
import type { ISharedSelectOption } from "../SharedSelect/SharedSelect.types";

const props = defineProps<ISharedFilterProps>();
const emit = defineEmits(["update:modelValue"]);

const internalValue = ref({ from: "", to: "" });
const formattedValue = ref({ from: "", to: "" });

const intervalOptions: ISharedSelectOption[] = [
  { value: "1/24", title: "1/24" },
  { value: "1/48", title: "1/48" },
  { value: "30/24", title: "30/24" },
];

const updateValue = (value: string | { from: string; to: string }) => {
  internalValue.value = value;
  emit("update:modelValue", value);
};

const onTimeInput = (key: "from" | "to", event: Event) => {
  const input = event.target as HTMLInputElement;
  const date = new Date(input.value);
  const timestamp = date.getTime();

  internalValue.value[key] = isNaN(timestamp) ? "" : timestamp;
  formattedValue.value[key] = input.value;
  emit("update:modelValue", internalValue.value);
};

watch(internalValue, (newValue) => emit("update:modelValue", newValue), { deep: true });
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
        gap: var(--indent-s);

        & .field {
          width: 80px;
          height: 40px;
        }
      }
    }

    &__inner {
      & .shared-select {
        & .shared-select__field {
          height: 35px;
        }
      }
    }
  }
</style>
