<template>
  <div class="animation animation-hide" ref="$el">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {useAnimation} from "~/modules/animation/useAnimation";

const $el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!$el.value) return;
  useAnimation($el.value)
})
</script>