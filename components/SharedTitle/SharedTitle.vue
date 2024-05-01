<template>
  <div class="title">
    <span><slot/></span>
  </div>
</template>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .title {
    font-size: var(--font-size-xxl);
    font-weight: var(--font-weight-semi-bold);
    margin-bottom: var(--ident-xs);

    @include media.media-breakpoint-down (xl) {
      font-size: var(--font-size-xl);
    }

    @include media.media-breakpoint-down(l) {
      font-size: var(--font-size-xm);
    }

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-ml);
      font-weight: var(--font-weight-bold);
    }
  }
</style>