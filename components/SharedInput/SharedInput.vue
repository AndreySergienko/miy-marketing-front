<template>
    <div class="field">
        <span class="field__name" ><slot /></span>
        <VeeField :class="{'field__input': true, 'field__input-error': error}" v-model="input" :name="name" :type="type" />
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

    @include media.media-breakpoint-down(l) {
        width: 100%;
      }

    &__name {
      margin: 0 0 var(--ident-s) var(--ident-m);

      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);

      @include media.media-breakpoint-down(sm) {
        width: 100%;
        font-size: var(--font-size-s);
      }
    }

    &__input {
      height: 50px;
      border: 1px solid var(--color-light-gray);
      border-radius: 12px;

      &:focus {
        border: 1px solid var(--color-light-gray);
        outline: none;
      }

      &-error {
        border: 1px solid var(--color-blue);
        outline: none;
      }
    }

    &__error {
      margin: var(--ident-s) 0 0 var(--ident-m);
      color: var(--color-blue);
    }
  }
</style>
