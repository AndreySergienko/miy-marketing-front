<template>
    <div class="field">
        <span class="field__name" ><slot /></span>
        <VeeField :class="{'field__input': true, 'field__input-error': error, 'disabled': isDisabled}" v-model="input" :name="name" :type="type" />
        <span class="field__error" v-if="error">{{ error }}</span>
    </div>

</template>
<script lang="ts" setup>
import type {ISharedInputEmits, ISharedInputProps} from "~/components/SharedInput/SharedInput.types";

const props = defineProps<ISharedInputProps>();
const emits = defineEmits<ISharedInputEmits>()

const input = computed({
    get() {
        return props.modelValue
    },
    set(value: string) {
        emits('update:modelValue', value)
    }
})

</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .field {
    display: flex;
    flex-direction: column;

    @include media.media-breakpoint-down(l) {
        width: 100%;
      }

    &__name {
      display: flex;
      margin: 0 0 var(--indent-s) var(--indent-m);

      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-s);
      }
    }

    &__input {
      padding-left: var(--indent-s);
      height: 50px;
      border: 1px solid var(--color-light-gray);
      border-radius: 12px;

      &:focus {
        border: 1px solid var(--color-light-gray);
        outline: none;
      }

      &-error {
        border: 1px solid var(--color-blue);
        outline: none;
      }

      &[type="number"]::-webkit-outer-spin-button,
      &[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &[type='number'],
      &[type="number"]:hover,
      &[type="number"]:focus {
        appearance: none;
        -moz-appearance: textfield;
      }

      &.disabled {
        opacity: .5;
        pointer-events: none;
      }
    }

    &__error {
      margin: var(--indent-s) 0 0 var(--indent-m);
      color: var(--color-blue);
    }
  }
</style>
