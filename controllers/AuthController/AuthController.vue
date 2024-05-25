<template>
  <slot
    :loginData="loginData"
    :loginRules="loginRules"
    :registrationRules="registrationRules"
    :registrationData="registrationData"
    :sendLogin="login"
    :sendRegistration="registration"
    :isShowGratitude="isShowGratitude"
    :isLoading="authStore.isLoading"
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
  const isShowGratitude = ref<boolean>(false);
  const registrationData = reactive<IRegistrationRequest>({
    email: '',
    inn: null,
    fio: '',
    password: '',
    uniqueBotId: '',
    isNotification: true
  })

  const loginData = reactive<ILoginRequest>({
    email: '',
    password: ''
  })

  const registration = async () => {
    await authStore.registration(registrationData, isShowGratitude)
  }

  const login = async () => {
    await authStore.login(loginData)
  }

  const loginRules = yup.object({
    email: yup.string().email(rules.email).required(rules.required).label(''),
    password: yup.string().min(10, rules.minPassword).max(40, rules.maxPassword).required(rules.required).label(''),
  });

  const registrationRules = yup.object({
    email: yup.string().email(rules.email).required(rules.required).label(''),
    fio: yup.string().min(8, rules.minName).required(rules.required).label(''),
    inn: yup.number().required(rules.required).label('').test('validateInn', rules.inn, validateInn),
    uniqueBotId: yup.string().required(rules.required).min(4, rules.minId).label(''),
    password: yup.string().min(10, rules.minPassword).max(40, rules.maxPassword).required(rules.required).label(''),
  });

  defineSlots<IAuthControllerSlots<typeof authStore.login, typeof authStore.registration>>()
</script>
