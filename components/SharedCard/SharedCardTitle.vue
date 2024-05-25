<template>
  <h3 class="title">{{ title }}</h3>
</template>

<script setup>
  const props = defineProps({
    title: {
      type:String,
      default: 'Еaque ipsa'
    }
  })
</script>

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