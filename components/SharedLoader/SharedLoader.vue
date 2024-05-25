<template>
  <span class="loader"></span>
</template>

<script setup lang="ts">
import type {ISharedLoaderProps} from "~/components/SharedLoader/SharedLoader.types";

const props = withDefaults(defineProps<ISharedLoaderProps>(), {
  width: '48px',
  height: '100%'
})
</script>

<style scoped lang="scss">
.loader {
  width: v-bind('props.width');
  height: v-bind('props.height');
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
