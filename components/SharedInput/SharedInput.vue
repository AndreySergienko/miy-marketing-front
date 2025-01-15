<template>
    <div class="field">
        <span class="field__name" ><slot /></span>
        <keep-alive>
          <VeeField :class="{'field__input': true, 'field__input-error': error, 'disabled': isDisabled}" v-model="input" :name="name" :type="type" :placeholder="placeholder"/>
        </keep-alive>
        <i class="field__icon"><slot name="icon" /></i>
        <span class="field__error" v-if="error">{{ error }}</span>
    </div>

</template>
<script lang="ts" setup>
import type {ISharedInputEmits, ISharedInputProps} from "~/components/SharedInput/SharedInput.types";

const props = defineProps<ISharedInputProps>();
const emits = defineEmits<ISharedInputEmits>();

const input = computed({
    get() {
        return props.modelValue
    },
    set(value: string) {
        emits('update:modelValue', value)
    }
})
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
  
  .field {
    position: relative;
    display: flex;
    flex-direction: column;

    &__name {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 500;
      color: var(--new-black);
    }

    &__input {
      width: 100%;
      padding: 18px 15px;
      border-radius: 10px;
      border: 1px solid;
      border-color: var(--input-default-border);
      height: 46px;
      font-size: 14px;
      font-weight: 400;
      color: var(--new-black);
      background: var(--new-white);
      outline: none;
      transition: 0.3s ease-in-out;

      &::placeholder {
        color: var(--input-placeholder);
      }

      &:focus {
        border-color: var(--new-primary);
      }

      &--disabled {
        pointer-events: none;
        background: var(--input-disabled);
        color: var(--input-placeholder);
      }

      &--error {
        border-color: var(--error);
      }
    }

    &__icon {
      position: absolute;
      right: 15px;
      bottom: 13px;
    }

    &__error {
      font-size: 14px;
      font-weight: 400;
      color: var(--error);
    }
  }
</style>
