<template>
  <ClientOnly>
    <teleport to="body">
      <Transition name="modal">
        <div class="modal" @click="handleOutClick">
          <div class="modal__inner" ref="modalContent">
            <slot />
          </div>
        </div>
      </Transition>
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useModal } from '~/composables/useModal';

interface ISharedModalProps {
  show?: boolean;
}

interface ISharedModalEmits {
  (event: 'update:show'): unknown
  (event: 'close'): unknown
}

const emits = defineEmits<ISharedModalEmits>()
const props = defineProps<ISharedModalProps>()

const closeModal = () => {
  emits('update:show', false);
  emits('close', true)
}

const {modalContent, handleOutClick} = useModal(closeModal)
</script>
<style scoped lang="scss">
.modal {
  background-color: rgba(0, 0, 0, .55);
  position: fixed;
  left: 0;
  top: 0;

  z-index: 10;

  width: 100%;
  height: 100%;
  

  display: flex;
  justify-content: center;
  align-items: center;

  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 36px;
    color: white;

    cursor: pointer;
    z-index: 12;

    :deep(path) {
      fill: black;
    }
  }
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
