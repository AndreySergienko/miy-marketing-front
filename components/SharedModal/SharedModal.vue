<template>
  <ClientOnly>
    <teleport to="body">
      <Transition name="modal">
        <div class="modal">
          <div class="modal__inner">

          </div>
        </div>
      </Transition>
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
interface ISharedModalProps {
  show?: boolean;
}

interface ISharedModalEmits {
  (event: 'update:show'): unknown
  (event: 'close'): unknown
}

const emits = defineEmits<ISharedModalEmits>()
const props = defineProps<ISharedModalProps>()
</script>
<style scoped lang="scss">
.modal {
  &__inner {}
}

.modal-opacity-enter-from {
  opacity: 0;
}

.modal-opacity-enter-to {
  opacity: 1;
}

.modal-opacity-enter-active,
.modal-opacity-leave-active {
  transition: all var(--default-duration) cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-opacity-leave-to {
  opacity: 0;
}
</style>
