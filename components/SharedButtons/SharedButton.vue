<template>
  <button :class="['btn', buttonColor[color]]" ><slot /></button>
</template>

<script setup lang="ts">
  import {buttonColor} from './SharedButtons.types';

  const props = defineProps({
    color: String,
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

    &__white {
      margin-right: var(--ident-xs);
      padding: var(--ident-m) var(--ident-xs);
      
      color: var(--color-blue);
      background-color: var(--color-white);
      border: 1px solid var(--color-white) ;
    }

    &__blue {
      padding: 12px var(--ident-xs);

      color: var(--color-white);
      background-color: var(--color-blue);
      border: 1px solid var(--color-blue);
    }

    &__blue-bold {
      padding: 16px 212px;
      width: 500px;

      font-size: 24px;
      font-weight: var(--font-weight-semi-bold);
      color: var(--color-white);
      background-color: var(--color-blue);
      border: 1px solid transparent;
      border-radius: 12px;
    }
  }
    
</style>

