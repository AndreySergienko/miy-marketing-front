<template>
  <div class="chip">
    <span class="chip__label">{{ date }}</span>
    <NuxtIcon
      class="chip__icon"
      name="file-input-remove"
      filled
      @click="$emit('remove')"
    />
  </div>
</template>

<script setup lang="ts">
import type { IChipProps, IChipEmits } from "./Chip.types";

defineProps<IChipProps>();
defineEmits<IChipEmits>();
</script>

<style scoped lang="scss" src="./Chip.scss"></style>
