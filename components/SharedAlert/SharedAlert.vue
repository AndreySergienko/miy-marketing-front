<template>
  <div class="alert">
    <NuxtIcon :name="type" class="alert__icon" filled size="24px" />
    <div class="alert__title">{{ title }}</div>
    <NuxtIcon  class="alert__icon alert__icon--close" name="close" filled @click="$emit('close')" />
  </div>
</template>

<script setup lang="ts">
import type {ISharedAlertEmits, ISharedAlertProps} from "~/components/SharedAlert/SharedAlert.types";

const props = defineProps<ISharedAlertProps>()
const emits = defineEmits<ISharedAlertEmits>()
const background = computed(() => props.type === 'error' ? 'var(--red)' : 'var(--green)');
</script>

<style scoped lang="scss">

.alert {
  padding: var(--indent-s);
  width: 380px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--color-white);
  font-size: var(--font-size-sm);
  text-align: left;

  background: v-bind('background');
  border-radius: 20px;

  &__title {
    padding: var(--indent-s);

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__icon {
    &:deep(svg) {
      width: 100%;
      height: 36px;
    }
    &--close {
      cursor: pointer;
    }
  }
}
</style>
