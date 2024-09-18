<template>
  <button class="default-button" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<style scoped lang="scss" src="./DefaultButton.scss"></style>
