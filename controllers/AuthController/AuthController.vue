<template>
  <slot
    :loginData="loginData"
    :loginRules="loginRules"
    :registrationRules="registrationRules"
    :registrationData="registrationData"
    :sendLogin="login"
    :sendRegistration="registration"
  />
</template>

<script setup lang="ts">
  import * as yup from 'yup'
  import {useAuthStore} from "~/store/auth/auth.store";
  import type {ILoginRequest, IRegistrationRequest} from "~/api/methods/auth/auth.types";
  import {IAuthControllerSlots,
  } from "~/controllers/AuthController/AuthController.types";
  import {validateInn} from '~/utils/validator.ts/inn.validator';
  const authStore = useAuthStore()

  const registrationData = reactive<IRegistrationRequest>({
    email: '',
    inn: 0,
    fio: '',
    password: '',
    uniqueBotId: '',
    isNotification: true,
    isPoliticalAccept: true
  })

  const loginData = reactive<ILoginRequest>({
    email: '',
    password: ''
  })

  const registration = async () => {
    await authStore.registration(registrationData)
  }

  const login = async () => {
    await authStore.login(loginData)
  }

  const loginRules = yup.object({
    email: yup.string().email(email).required(required).label(''),
    password: yup.string().min(5, minPassword).max(20, maxPassword).required(required).label(''),
  });

  const registrationRules = yup.object({
    email: yup.string().email(email).required(required).label(''),
    fio: yup.string().min(2, minName).required(required).label(''),
    inn: yup.number().required(required).label('').test('validateInn', inn, validateInn),
    uniqueBotId: yup.string().required(required).min(4, minId).label(''),
    password: yup.string().min(5, minPassword).max(20, maxPassword).required(required).label(''),
    isPoliticalAccept: yup.boolean().required(required)
  });

  defineSlots<IAuthControllerSlots<typeof authStore.login, typeof authStore.registration>>()
</script>
