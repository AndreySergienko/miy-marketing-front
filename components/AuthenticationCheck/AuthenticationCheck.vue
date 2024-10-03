<template>
  <div class="authentication-check" @click="handleClick">
    <input
      class="authentication-check__input"
      type="checkbox"
      :name="name"
      v-model="value"
    />
    <div class="authentication-check__content">
      <NuxtIcon
        v-if="value"
        class="authentication-check__content-icon"
        name="auth-check"
        filled
      />
    </div>
    <label class="authentication-check__label">
      <slot />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { AuthenticationCheckProps } from "./AuthenticationCheck.types";

const props = defineProps<AuthenticationCheckProps>();
const { name } = toRefs(props);

const { value } = useField(name, undefined, {
  type: "checkbox",
});

const handleClick = () => {
  value.value = !value.value;
};
</script>

<style scoped lang="scss" src="./AuthenticationCheck.scss"></style>
