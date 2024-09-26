<template>
  <div class="slot">
    <AuthenticationInput type="text" name="price" placeholder="400₽" />
    <NuxtIcon
      class="slot__icon"
      name="file-input-remove"
      filled
      @click="$emit('remove')"
    />
  </div>
</template>

<script setup lang="ts">
import type { ISlotProps, ISlotEmits } from "./Slot.types";

defineProps<ISlotProps>();
defineEmits<ISlotEmits>();
</script>

<style scoped lang="scss" src="./Slot.scss"></style>
