<template>
  <div class="text"> 
    <span><slot /></span>
  </div>
</template>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .text {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    margin-bottom: var( --indent-2xl);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-s);
    }
  }
</style>