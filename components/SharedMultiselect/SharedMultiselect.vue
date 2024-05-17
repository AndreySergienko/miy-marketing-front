<template>
  <div
    :class="['shared-multiselect', rootClass]"
    v-outside-click="() => (isOpened = false)"
  >
    <span class="shared-multiselect__title">{{ title }}</span>
    <div class="shared-multiselect__field">
      <div class="shared-multiselect__field-selected">
        <SharedMultiselectSelectedItem
          v-for="option in selectedOptions"
          :key="option.value"
          :text="option.title"
          @remove="handleRemove(option.value)"
        />
      </div>
      <NuxtIcon
        class="shared-multiselect__field-arrow"
        name="select-arrow"
        filled
        @click="isOpened = !isOpened"
      />
    </div>
    <div class="shared-multiselect__options">
      <div class="shared-multiselect__options-inner">
        <SharedMultiselectOptionsItem
          v-for="option in options"
          :key="option.value"
          :text="option.title"
          :is-selected="
            !!selectedOptions.find((item) => item.value === option.value)
          "
          @trigger="handleOptionClick(option.value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  ISharedMultiselectOption,
  ISharedMultiselectProps,
  ISharedMultiselectEmits,
} from "./SharedMultiselect.types";

const props = defineProps<ISharedMultiselectProps>();
const { selected, options } = toRefs(props);

const emit = defineEmits<ISharedMultiselectEmits>();

const isOpened = ref(false);

const selectedOptions = computed(() => {
  return selected.value
    .map((value) => {
      const option = options.value.find((option) => option.value === value);
      return option || null;
    })
    .filter(Boolean) as ISharedMultiselectOption[];
});

const rootClass = computed(() => ({
  "shared-multiselect--opened": isOpened.value,
}));

const handleOptionClick = (value: string) => {
  if (selectedOptions.value.find((option) => option.value === value)) {
    emit("unselect", value);
    return;
  }

  emit("select", value);
};

const handleRemove = (value: string) => {
  emit("unselect", value);
};
</script>

<style scoped lang="scss">
.shared-multiselect {
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
    overflow: hidden;
    user-select: none;

    &-selected {
      flex: 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: var(--indent-m);
    }

    &-arrow {
      margin-left: auto;
      width: 30px;
      height: 30px;
      transition: 0.3s rotate ease-in-out;
      cursor: pointer;

      :deep(svg) {
        width: 100%;
        height: 100%;
      }
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
    .shared-multiselect__field {
      border-radius: var(--indent-m) var(--indent-m) 0 0;

      &-arrow {
        rotate: 180deg;
      }
    }

    .shared-multiselect__options {
      display: block;
    }
  }
}
</style>
