<template>
  <div class="authentication-radio" @click="handleClick">
    <input
      class="authentication-radio__input"
      type="radio"
      :name="name"
      :value="value"
      v-model="modelValue"
    />
    <div class="authentication-radio__content"></div>
    <label class="authentication-radio__label">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import { AuthenticationRadioProps } from "./AuthenticationRadio.types";

const props = defineProps<AuthenticationRadioProps>();
const { name, value } = toRefs(props);

const { value: modelValue } = useField(name, undefined, {
  type: "radio",
  checkedValue: value.value,
});

const handleClick = () => {
  modelValue.value = value.value;
};
</script>

<style scoped lang="scss" src="./AuthenticationRadio.scss"></style>
