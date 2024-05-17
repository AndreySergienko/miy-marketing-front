<template>
  <div class="radio">
    <input class="radio__input" type="radio" :checked="checked" :value="value" :name="name" @change="emits('change', value)">
    <label class="radio__label"><slot /></label>
  </div>
</template>

<script setup lang="ts">
import type {ISharedRadioEmits, ISharedRadioProps} from "~/components/SharedRadio/SharedRadio.types";

const emits = defineEmits<ISharedRadioEmits>()
const props = defineProps<ISharedRadioProps>();
</script>

<style scoped lang="scss">
@use 'assets/styles/media';
.radio {
  display: flex;
  align-items: flex-start;
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-medium);

  @include media.media-breakpoint-down(sm) {
    font-size: var(--font-size-s);
  }

  &__input {
    margin-top: 5px;
  }
}
</style>
