<template>
    <div class="field">
        <span class="field__name" ><slot /></span>
        <VeeField class="field__input" v-model="input" :name="name" :type="type" />
        <span class="field__error" v-if="error">{{ error }}</span>
    </div>

</template>
<script lang="ts" setup>
import type {ISharedInputEmits, ISharedInputProps} from "~/components/SharedInput/SharedInput.types";

const props = defineProps<ISharedInputProps>();
const emits = defineEmits<ISharedInputEmits>()

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
    display: flex;
    flex-direction: column;

    &__name {
      margin-bottom: var(--ident-m);

      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-s);
      }
    }

    &__input {
      height: 50px;
      border: 1px solid var(--color-light-gray);
      border-radius: 12px;

      &:focus {
        border: 1px solid var(--color-blue);
        outline: none;
      }
    }
  }
</style>
