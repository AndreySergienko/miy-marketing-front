<template>
  <div class="text"> 
    <span><slot /></span>
  </div>
</template>

<style scoped>
  .text {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    padding: 5px;
    text-align: center;
  }
</style>