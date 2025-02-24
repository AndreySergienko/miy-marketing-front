<template>
  <div
    :class="['shared-select', rootClass]"
    v-outside-click="() => (isOpened = false)"
  >
    <span class="shared-select__title">{{ title }}</span>
    <div class="shared-select__field" :class="{'shared-select__field-filter': props.filter}" @click="isOpened = !isOpened">
      <div class="shared-select__field-selected">{{ selectedText }}</div>
      <NuxtIcon class="shared-select__field-arrow" name="select-arrow" filled />
    </div>
    <div class="shared-select__options">
      <div class="shared-select__options-inner">
        <span
          v-if="placeholder"
          class="shared-select__options-inner--item shared-select__options-inner--item-placeholder"
        >
          {{ placeholder }}
        </span>
        <span
          v-for="option in options"
          :key="option.value"
          class="shared-select__options-inner--item"
          @click="handleOptionClick(option.value)"
        >
          {{ option.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  ISharedSelectProps,
  ISharedSelectEmits,
} from "./SharedSelect.types";

const props = defineProps<ISharedSelectProps>();
const { selected, placeholder, options } = toRefs(props);

const emit = defineEmits<ISharedSelectEmits>();

const isOpened = ref(false);

const selectedText = computed(() => {
  if (!selected.value) return placeholder.value || "";

  const option = options.value.find(
    (option) => option.value === selected.value
  );

  return option?.title || "";
});

const rootClass = computed(() => ({
  "shared-select--opened": isOpened.value,
}));

const handleOptionClick = (value: string) => {
  isOpened.value = false;
  emit("select", value);
};
</script>

<style scoped lang="scss">
.shared-select {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--indent-s);

  &__title {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
  }

  &__field {
    display: flex;
    align-items: center;
    gap: var(--indent-m);
    width: 100%;
    height: 51px;
    border: 1px solid var(--color-light-gray);
    border-radius: var(--indent-m);
    padding: var(--indent-m);
    background: #fff;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.3s ease, background-color 0.3s ease;

    &:hover {
      border-color: var(--color-blue);
    }

    &-selected {
      flex: 1;
      overflow: hidden;
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-medium);
    }

    &-arrow {
      margin-left: auto;
      width: 30px;
      height: 30px;
      transition: 0.3s rotate ease-in-out;

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
    }

    &-filter {
      height: 35px;
    }
  }

  &__options {
    position: absolute;
    z-index: 2;
    top: 100%;
    width: 100%;
    display: none;
    padding: var(--indent-m) var(--indent-s) var(--indent-m) 0;
    background: #fff;
    border: 1px solid var(--color-light-gray);
    border-top: none;
    border-radius: 0 0 var(--indent-m) var(--indent-m);
    box-shadow: 0 4px 5px 5px #00000005;

    &-inner {
      width: 100%;
      max-height: 300px;
      display: flex;
      flex-direction: column;
      gap: var(--indent-l);
      overflow: auto;

      &--item {
        flex: 1 0;
        font-size: var(--font-size-s);
        font-weight: var(--font-weight-medium);
        padding: var(--indent-s) 28px;
        cursor: pointer;

        &-placeholder {
          pointer-events: none;
          opacity: 0.5;
        }
      }

      &::-webkit-scrollbar {
        width: 16px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--color-light-gray);
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: var(--color-dark-gray);
      }
    }
  }

  &--opened {
    .shared-select__field {
      border-radius: var(--indent-m) var(--indent-m) 0 0;

      &-arrow {
        rotate: 180deg;
      }
    }

    .shared-select__options {
      display: block;
    }
  }
}
</style>
