<template>
  <div class="title">
    <span><slot/></span>
  </div>
</template>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--indent-xl);

    @include media.media-breakpoint-down (xl) {
      font-size: var(--font-size-xl);
    }

    @include media.media-breakpoint-down(l) {
      font-size: var(--font-size-l);
    }

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-bold);
    }
  }
</style>