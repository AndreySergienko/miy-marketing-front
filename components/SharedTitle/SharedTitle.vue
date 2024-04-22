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

    @include media.media-breakpoint-down(md) {
      font-size: var(--font-size-xl);
    }

    @include media.media-breakpoint-down(sm) {
      font-size: 40px;
      font-weight: 700;
    }
  }
</style>