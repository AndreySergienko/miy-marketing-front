<template>
  <slot />
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/auth/auth.store";
import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";
import type {IAuthControllerExpose} from "~/controllers/AuthController/AuthController.types";

const authStore = useAuthStore()

const registrationData = reactive<Partial<IRegistrationRequest>>({})
const loginData = reactive<Partial<ILoginRequest>>({})

defineExpose<IAuthControllerExpose<typeof authStore.login, typeof authStore.registration>>({
  loginData,
  registrationData,
  sendLogin: authStore.login,
  sendRegistration: authStore.registration
})
</script>