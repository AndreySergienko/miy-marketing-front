<template>
  <div class="chip">
    <span class="chip__label">{{ formattedLabel }}</span>
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

const props = defineProps<IChipProps>();
const { date } = toRefs(props);

defineEmits<IChipEmits>();

const formattedLabel = computed(
  () => `${date.value.slice(0, 6)}${date.value.slice(8)}`
);
</script>

<style scoped lang="scss" src="./Chip.scss"></style>
