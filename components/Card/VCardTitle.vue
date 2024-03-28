<template>
  <div>
    <h1 class="title"><slot/></h1>
  </div>
</template>

<style scoped>
  .title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semi-bold);
    text-align: center;
  }
</style>