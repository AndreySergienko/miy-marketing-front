<template>
  <div class="title">
    <span><slot/></span>
  </div>
</template>

<style scoped>
  .title {
    font-size: var(--font-size-xxl);
    font-weight: var(--font-weight-semi-bold);
    margin-bottom: var(--ident-xs);
  }
</style>