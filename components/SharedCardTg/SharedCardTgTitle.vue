<template>
  <h3 class="title">{{ title }}</h3>
</template>

<script setup>
  const props = defineProps({
    title: {
      type:String,
      default: 'Наименование Тг-канала'
    }
  })
</script>
<style lang="scss" scoped>
  .title {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-semi-bold);
  }
</style>