<template>
    <slot :loginData="loginData" :loginRules="loginRules" :registrationRules="registrationRules"
          :registrationData="registrationData"
          :sendLogin="authStore.login"
          :sendRegistration="authStore.registration" />
</template>

<script setup lang="ts">
import * as yup from 'yup'
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

const loginRules = yup.object({
  email: yup.string().email().required().label('У сука бля'),
  password: yup.string().min(5).required().label('УУУУУУУУУУУУУУУУУУ'),
});

const registrationRules = yup.object({
  email: yup.string().email().required().label('У сука бля'),
  password: yup.string().min(5).required().label('УУУУУУУУУУУУУУУУУУ'),
});

defineSlots<IAuthControllerSlots<typeof authStore.login, typeof authStore.registration>>()


</script>
