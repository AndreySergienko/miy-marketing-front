<template>
  <ClientOnly>
    <teleport to="body">
      <Transition name="modal">
        <div class="modal">
          <div class="modal__inner">
            <nuxt-icon class="modal__close" name="close" filled @click="emits('close')" />

            <slot />
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

onMounted(() => {
  document.body.classList.add('hidden')
})

onUnmounted(() => {
  document.body.classList.remove('hidden')
})
</script>
<style scoped lang="scss">
.modal {
  position: absolute;
  left: 0;
  top: 0;

  z-index: 10;

  width: 100%;
  height: 100%;
  background: #464646;

  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    padding: var(--indent-xl);
    position: relative;

    min-width: 200px;
    min-height: 200px;

    background: #fff;
  }

  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 36px;

    cursor: pointer;
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
