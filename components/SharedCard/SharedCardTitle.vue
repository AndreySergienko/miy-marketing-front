<template>
  <h3 class="title"><slot /></h3>
</template>


<style lang="scss" scoped>
  @use 'assets/styles/media';

  .title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semi-bold);
    text-align: center;

    @include media.media-breakpoint-down (l) {
      font-size: var(--font-size-l);
    }

    @include media.media-breakpoint-down(sm) {
      font-size: 30px;
    }
  }
</style>
