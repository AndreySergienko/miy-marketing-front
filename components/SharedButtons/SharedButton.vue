<template>
  <button :class="['btn', buttonClass[className]]" ><slot /></button>
</template>

<script setup lang="ts">
  import { TClass } from '~/types/index.ts';

  type TButtonClass = Record<TClass, string>
  const props = defineProps({
    className: String
  })

  const buttonClass: TButtonClass = {
    l:'btn__login',
    r:'btn__registration'
  }

</script>

<style scoped lang="scss">
  .btn {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-block;

    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    cursor: pointer;

    &__login {
      margin-right: var(--ident-xs);
      padding: var(--ident-m) var(--ident-xs);
      
      color: var(--color-blue);
      background-color: var(--color-white);
      border: 1px solid var(--color-white) ;
    }

    &__registration {
      padding: 12px var(--ident-xs);

      color: var(--color-white);
      background-color: var(--color-blue);
      border: 1px solid var(--color-blue) ;
    }
  }
    
</style>

