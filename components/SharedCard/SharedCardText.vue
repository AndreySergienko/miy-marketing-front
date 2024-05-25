<template>
  <div class="text"> 
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
  const props= defineProps({
    text:{
      type:String,
      default: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
  })
</script>

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