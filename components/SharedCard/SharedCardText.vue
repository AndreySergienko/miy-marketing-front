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

<style scoped>
  .text {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    padding: var(--ident-s);
    margin-bottom: var(--ident-l);
    text-align: center;
  }
</style>