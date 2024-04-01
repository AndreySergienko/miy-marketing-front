<template>
  <div>
    <h3 class="title">{{ title }}</h3>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type:String,
      default: 'Еaque ipsa 300 р'
    }
  })
</script>

<style scoped>
  .title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semi-bold);
    text-align: center;
  }
</style>