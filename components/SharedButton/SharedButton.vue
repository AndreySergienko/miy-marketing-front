<template>
  <button :class="['btn', buttonColor[color], buttonSize[size]]" :disabled="isDisabled" @click.prevent="click">
    <SharedLoader v-if="isLoading" height="20px" width="20px" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import type {ISharedButtonProps, TButtonColorClass, TButtonSizeClass, ISharedButtonEmits} from './SharedButton.types';

const emits = defineEmits<ISharedButtonEmits>()
const props = withDefaults(defineProps<ISharedButtonProps>(), {
  isDisabled: false,
  isLoading: false,
})

const buttonColor: TButtonColorClass = {
  white: 'btn__white',
  blue: 'btn__blue',
  gray: 'btn__gray',
}
const buttonSize: TButtonSizeClass = {
  l: 'btn__large',
  m: 'btn__medium',
  s: 'btn__small',
  xl: 'btn__xl'
}

const click = () => {
  if (props.isLoading || props.isDisabled) return
  emits('click')
}
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .btn {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 25px;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, .1);
    cursor: pointer;
    text-align: center;
    max-width: 390px;
    min-height: 57px;

    &__small {
      width: 110px;
    }
    &__medium {
      width: 240px;
    }
    &__xl {
      padding: var(--indent-l) 48px;
      border-radius: 13px;
    }
    &__large {
      width: 500px;
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-semi-bold);
      border-radius: 12px;

      @include media.media-breakpoint-down(sm) {
        width: 325px;
        font-size: var(--font-size-s);
      }
    }

    &__white {
      margin-right: var(--indent-3xl);

      color: var(--color-blue);
      background-color: var(--color-white);
      border: 1px solid transparent;

      @include media.media-breakpoint-down(sm) {
        margin-right: var(--indent-s);
      }
    }

    &__blue {
      color: var(--color-white);
      background-color: var(--color-blue);
      border: 1px solid var(--color-blue);
    }

    &:disabled,
    &__gray {
      cursor: no-drop;
      color: var(--color-white);
      background-color: var(--color-dark-gray);
      opacity: .75;
      box-shadow: none;
      border: 1px solid transparent;
    }

  }

</style>

