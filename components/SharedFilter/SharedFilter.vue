<template>
  <div class="filter">
    <div class="filter__inner">

      <div class="filter__item">
        <div class="filter__item-title">цена</div>
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
        <div class="filter__item-title">время</div>
        <div class="filter__item-form">
          <SharedInput
            v-model="dateMin"
            name="date-min"
            type="time"
            placeholder="с"
            @input="updateValue('dateMin', dateMin)"
          />

          <SharedInput
            v-model="dateMax"
            name="date-max"
            type="time"
            placeholder="по"
            @input="updateValue('dateMax', dateMax)"
          />
        </div>
      </div>

      <div class="filter__item">
        <SharedSelect
          title="интервал"
          :selected="intervalId"
          :options="intervalOptions"
          filter
          @select="updateValue('intervalId', $event)"
        />
      </div>

      <div class="filter__item">
        <div class="filter__item-title">подписчики</div>
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
  channelStore.formatAll.map((format: IFormat) => ({
    value: format.id.toString(),
    title: format.value,
  }))
);

// Преобразование значений в объект фильтров
const currentFilters = () => ({
  priceMin: priceMin.value,
  priceMax: priceMax.value,
  dateMin: dateMin.value ? formatTime(dateMin.value) : "",
  dateMax: dateMax.value ? formatTime(dateMax.value) : "",
  subscribersMin: subscribersMin.value,
  subscribersMax: subscribersMax.value,
  intervalId: intervalId.value,
});

const formatTime = (time: string): string => {
  if (!time) return "";
  const [hours, minutes] = time.split(":");
  return `${hours}.${minutes}`;
};


// Обновление значений фильтров
const updateValue = (key: string, value: string) => {
  let updatedValue;
   if (key === "intervalId") {
    intervalId.value = value;
  } else {
    updatedValue = { [key]: value };
  }

  emit("update:modelValue", currentFilters());
};
</script>


<style scoped lang="scss">
  @use "assets/styles/media";
  
  .filter {
    &__inner {
      display: flex;
      gap: var(--indent-3xl);

      @include media.media-breakpoint-down (sm) {
        margin-top: var(--indent-m);
        flex-direction: column;
        gap: var(--indent-xl);
      }
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &-title {
        margin-left: var(--indent-m);
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
