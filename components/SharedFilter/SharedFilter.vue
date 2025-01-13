<template>
  <div class="filter">
    <div class="filter__inner">

      <div class="filter__item">
        <div class="filter__item-title">Цена</div>
        <div class="filter__item-form">
          <SharedInput
            v-model="priceMin"
            name="price-min"
            type="text"
            placeholder="от"
            @input="updateValue('priceMin', priceMin)"
          />
          <SharedInput
            v-model="priceMax"
            name="price-max"
            type="text"
            placeholder="до"
            @input="updateValue('priceMax', priceMax)"
          />
        </div>
      </div>

      <div class="filter__item">
        <div class="filter__item-title">Время</div>
        <div class="filter__item-form">
          <SharedInput
            v-model="dateMin"
            name="date-min"
            type="datetime-local"
            placeholder="с"
            @input="updateValue('dateMin', dateMin)"
          />
          <SharedInput
            v-model="dateMax"
            name="date-max"
            type="datetime-local"
            placeholder="по"
            @input="updateValue('dateMax', dateMax)"
          />
        </div>
      </div>

      <div class="filter__item">
        <SharedSelect
          title="Интервал"
          :selected="intervalId"
          :options="intervalOptions"
          filter
          @select="updateValue('intervalId', $event)"
        />
      </div>

      <div class="filter__item">
        <div class="filter__item-title">Подписчики</div>
        <div class="filter__item-form">
          <SharedInput
            v-model="subscribersMin"
            name="subscribers-min"
            type="text"
            placeholder="от"
            @input="updateValue('subscribersMin', subscribersMin)"
          />
          <SharedInput
            v-model="subscribersMax"
            name="subscribers-max"
            type="text"
            placeholder="до"
            @input="updateValue('subscribersMax', subscribersMax)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SharedSelect from "../SharedSelect/SharedSelect.vue";
import { useChannelStore } from "~/store/channel/channel.store";
import type { IFormat } from "~/api/methods/channels/channels.types";

const channelStore = useChannelStore();

const emit = defineEmits(["update:modelValue"]);

const priceMin = ref<string>("");
const priceMax = ref<string>("");
const dateMin = ref<string>("");
const dateMax = ref<string>("");
const subscribersMin = ref<string>("");
const subscribersMax = ref<string>("");
const intervalId = ref<string>("");

const intervalOptions = computed(() =>
  channelStore.formatAll.map((format:IFormat) => ({
    value: format.id.toString(),
    title: format.value,
  }))
);

const currentFilters = computed(() => ({
  priceMin: priceMin.value,
  priceMax: priceMax.value,
  dateMin: dateMin.value,
  dateMax: dateMax.value,
  subscribersMin: subscribersMin.value,
  subscribersMax: subscribersMax.value,
  intervalId: intervalId.value,
}));

// Обновление значений фильтров
const updateValue = (key: string, value: string) => {
  let updatedValue;

  // Преобразование значений фильтра времени в timestamp
  if (key === "dateMin" || key === "dateMax") {
    const updatedFilters = {
      dateMin: dateMin.value ? new Date(dateMin.value).getTime().toString() : "",
      dateMax: dateMax.value ? new Date(dateMax.value).getTime().toString() : "",
    };
    updatedValue = updatedFilters;
    // Обновление значения фильтра интервал
  } else if (key === "intervalId") {
    intervalId.value = value
  } else {
    updatedValue = { [key]: value };
  }

  emit("update:modelValue", { ...currentFilters.value, ...updatedValue });
};
</script>

<style scoped lang="scss">
  @use "assets/styles/media";
  
  .filter {
    &__inner {
      display: flex;
      gap: var(--indent-3xl);
    }
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
