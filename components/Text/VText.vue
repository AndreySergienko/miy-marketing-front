<template>
  <div class="text"> 
    <span><slot /></span>
  </div>
</template>

<style scoped>
  .text {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    margin-bottom: var( --ident-xm);
  }
</style>