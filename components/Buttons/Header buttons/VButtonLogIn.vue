<template>
  <div>
    <button class="btn__login"> Войти </button>
  </div>
</template>

<style scoped>
  .btn__login {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-block;
    padding: var(--ident-m) var(--ident-xs);
    margin-right: var(--ident-xs);
    

    color: var(--color-blue);
    background-color: var(--color-white);
    border: 1px solid var(--color-white) ;
    border-radius: 25px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    cursor: pointer;
  }
</style>