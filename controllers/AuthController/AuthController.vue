<template>
    <slot :login="loginData" :registrationData="registrationData" :sendLogin="authStore.login" :sendRegistration="authStore.registration" />
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/auth/auth.store";
import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";
import {IAuthControllerSlots,
} from "~/controllers/AuthController/AuthController.types";
const authStore = useAuthStore()

const registrationData = reactive<IRegistrationRequest>({
  email: '',
  inn: null,
  lastname: '',
  name: '',
  password: '',
  surname: '',
  uniqueBotId: ''
})
const loginData = reactive<ILoginRequest>({
  email: '',
  password: ''
})

defineSlots<IAuthControllerSlots<typeof authStore.login, typeof authStore.registration>>()
// defineExpose<IAuthControllerExpose<typeof authStore.login, typeof authStore.registration>>({
//   loginData,
//   registrationData,
//   sendLogin: authStore.login,
//   sendRegistration: authStore.registration
// })

</script>