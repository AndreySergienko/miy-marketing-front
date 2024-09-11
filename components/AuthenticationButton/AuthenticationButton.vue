<template>
  <button class="authentication-button" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<style scoped lang="scss" src="./AuthenticationButton.scss"></style>
