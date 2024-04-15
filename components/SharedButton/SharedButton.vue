<template>
  <button :class="['btn', buttonColor[color], buttonSize[size]]" ><slot /></button>
</template>

<script setup lang="ts">
  import type {TButtonColorClass, TButtonSizeClass} from './SharedButtons.types';

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
  .btn {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-block;

    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    cursor: pointer;

    &__small {
      padding: var(--ident-m) var(--ident-xs);
    }
    &__medium {
      padding: 12px var(--ident-xs);
    }
    &__large {
      padding: 16px 212px;
      font-size: 24px;
      font-weight: var(--font-weight-semi-bold);
      border-radius: 12px;
    }

    &__white {
      margin-right: var(--ident-xs);
      color: var(--color-blue);
      background-color: var(--color-white);
      border: 1px solid var(--color-white) ;
    }

    &__blue {
      color: var(--color-white);
      background-color: var(--color-blue);
      border: 1px solid var(--color-blue);
    }

  }
    
</style>

