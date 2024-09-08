<template>
  <div class="authentication-input">
    <label class="authentication-input__label" :for="uniqueId">
      {{ label }}
      <slot name="icon" />
    </label>
    <input
      :id="uniqueId"
      :class="['authentication-input__input', inputClasses]"
      :type="type"
      :disabled="disabled"
      v-model="value"
      :placeholder="placeholder"
    />
    <span v-if="errorMessage" class="authentication-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { AuthenticationInputProps } from "./AuthenticationInput.types";

const props = defineProps<AuthenticationInputProps>();
const { name, disabled } = toRefs(props);

const { value, errorMessage } = useField(name);

const inputClasses = computed(() => ({
  "authentication-input__input--disabled": disabled.value,
  "authentication-input__input--error": errorMessage.value,
}));

const uniqueId = useId();
</script>

<style scoped lang="scss" src="./AuthenticationInput.scss"></style>
