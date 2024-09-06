<template>
  <div class="authentication-input">
    <label class="authentication-input__label" :for="uniqueId">
      {{ label }}
    </label>
    <input
      :id="uniqueId"
      :class="['authentication-input__input', inputClasses]"
      :type="type"
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
const { name, isDisabled } = toRefs(props);

const { value, errorMessage } = useField(name);

const inputClasses = computed(() => ({
  "authentication-input__input--disabled": isDisabled.value,
  "authentication-input__input--error": errorMessage.value,
}));

const uniqueId = useId();
</script>

<style scoped lang="scss" src="./AuthenticationInput.scss"></style>
