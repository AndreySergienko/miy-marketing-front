<template>
  <button :class="['btn', buttonColor[color], buttonSize[size]]" ><slot /></button>
</template>

<script setup lang="ts">
  import type {TButtonColorClass, TButtonSizeClass} from './SharedButton.types';

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
  const props = defineProps({
    color: String,
    size: String,
  })
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .btn {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-flex;
    align-items: center;

    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    cursor: pointer;

    &__small {
      padding: var(--indent-m) var(--indent-xl);
    }
    &__medium {
      padding: 12px var(--indent-xl);
    }
    &__xl {
      padding: var(--indent-l) 48px;
      border-radius: 13px;
    }
    &__large {
      padding: var(--indent-l) 9vw;
      font-size: var(-font-size-ml);
      font-weight: var(--font-weight-semi-bold);
      border-radius: 12px;

      @include media.media-breakpoint-down(xl) {
        padding: var(--indent-l) 12vw;
      }

      @include media.media-breakpoint-down(l) {
        padding: var(--indent-l) 17vw;
      }

      @include media.media-breakpoint-down(md) {
        padding: var(--indent-l) 21vw;
      }

      @include media.media-breakpoint-down(sm) {
        padding: var(--indent-m) 140px;
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

    &__gray {
      color: var(--color-white);
      background-color: var(--color-light-gray);
      border: 1px solid transparent;
    }

  }

</style>

