<template>
  <div class="authentication-input">
    <label v-if="label" class="authentication-input__label" :for="uniqueId">
      {{ label }}
      <slot name="icon" />
    </label>
    <input
      :id="uniqueId"
      :class="['authentication-input__input', inputClasses]"
      :type="inputType"
      :disabled="disabled"
      v-model="value"
      :placeholder="placeholder"
    />
    <div
      v-if="showPasswordIcon"
      class="authentication-input__password"
      @click="togglePasswordVisibility"
    >
      <NuxtIcon :name="passwordIcon" filled />
    </div>
    <span v-if="errorMessage" class="authentication-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { AuthenticationInputProps } from "./AuthenticationInput.types";

const props = defineProps<AuthenticationInputProps>();
const { name, showPasswordIcon, type, disabled } = toRefs(props);

const { value, errorMessage } = useField(name);

const inputClasses = computed(() => ({
  "authentication-input__input--disabled": disabled.value,
  "authentication-input__input--error": errorMessage.value,
}));

const uniqueId = useId();

const isPasswordVisible = ref(false);

const inputType = computed(() => {
  if (showPasswordIcon.value) {
    return isPasswordVisible.value ? "text" : "password";
  }
  return type.value;
});

const passwordIcon = computed(() => {
  return isPasswordVisible.value ? "password-eye" : "password-eye-hidden";
});

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<style scoped lang="scss" src="./AuthenticationInput.scss"></style>
