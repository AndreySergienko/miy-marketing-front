<template>
  <div class="text">
    <span><slot /></span>
  </div>
</template>

<style  lang="scss" scoped>
  @use 'assets/styles/media';

  .text {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    padding: var(--indent-s);
    margin-bottom: var(--indent-l);
    text-align: center;

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-s);
    }
  }
</style>
