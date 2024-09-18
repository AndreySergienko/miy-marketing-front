<template>
  <div class="default-select" v-outside-click="() => (isOpened = false)">
    <label class="default-select__label" :for="uniqueId">
      {{ label }}
    </label>
    <div class="default-select__field" @click="isOpened = !isOpened">
      <div :class="['default-select__field-selected', placeholderClass]">
        {{ selectedText }}
      </div>
      <NuxtIcon
        class="default-select__field-arrow"
        name="default-select-arrow"
        filled
      />
    </div>
    <div v-if="isOpened" class="default-select__options">
      <span
        v-for="option in options"
        :key="option.value"
        class="default-select__options--item"
        @click="handleOptionClick(option.value)"
      >
        {{ option.label }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DefaultSelectProps } from "./DefaultSelect.types";

const props = defineProps<DefaultSelectProps>();
const { name, label, options, placeholder } = toRefs(props);

const { value } = useField(name);

const uniqueId = useId();
const isOpened = ref(false);

const placeholderClass = computed(() => ({
  "default-select__field-selected--placeholder": !value.value,
}));

const selectedText = computed(() => {
  for (const option of options.value) {
    if (option.value !== value.value) continue;
    return option.label;
  }

  return placeholder.value;
});

const handleOptionClick = (optionValue: string) => {
  value.value = optionValue;
  isOpened.value = false;
};
</script>

<style scoped lang="scss" src="./DefaultSelect.scss"></style>
