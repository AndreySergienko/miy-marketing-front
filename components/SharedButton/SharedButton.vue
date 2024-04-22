<template>
  <button :class="['btn', buttonColor[color], buttonSize[size]]" ><slot /></button>
</template>

<script setup lang="ts">
  import type {TButtonColorClass, TButtonSizeClass} from './SharedButton.types';

  const buttonColor: TButtonColorClass = {
  white: 'btn__white',
  blue: 'btn__blue',
}
  const buttonSize: TButtonSizeClass = {
    l: 'btn__large',
    m: 'btn__medium',
    s: 'btn__small'
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
      padding: var(--ident-m) var(--ident-xs);
    }
    &__medium {
      padding: var(--ident-mx) var(--ident-xs);
    }
    &__large {
      padding: var(--font-size-s) 212px;
      font-size: var(-font-size-ml);
      font-weight: var(--font-weight-semi-bold);
      border-radius: 12px;

      @include media.media-breakpoint-down(sm) {
        padding: var(--ident-mx) 138px;
        font-size: var(--font-size-s);
      }
    }

    &__white {
      margin-right: var(--ident-xs);

      padding: var(--ident-m) var(--ident-xs);


      color: var(--color-blue);
      background-color: var(--color-white);
      border: 1px solid transparent ;

      @include media.media-breakpoint-down(sm) {
        margin-right: var(--ident-m);
      }
    }

    &__blue {
      color: var(--color-white);
      background-color: var(--color-blue);
      border: 1px solid var(--color-blue);
    }

  }

</style>

