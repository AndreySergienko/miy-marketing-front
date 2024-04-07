<template>
  <button class="btn"><slot /></button>
</template>

<style lang="scss" scoped>
.btn {
  &--small {}
  &--big {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-block;
    padding: var(--ident-m) var(--ident-xs);

    color: var(--color-white);
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue) ;
    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    cursor:pointer;
  }
}
  .btn__registration {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-block;
    padding: var(--ident-m) var(--ident-xs);

    color: var(--color-white);
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue) ;
    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    cursor:pointer;
  }
</style>
