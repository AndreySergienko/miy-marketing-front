<template>
  <div>
    <h1 class="title"><slot/></h1>
  </div>
</template>

<style scoped>
  .title {
    font-size: var(--font-size-xxl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--ident-xs);
  }
</style>