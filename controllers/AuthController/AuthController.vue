<template>
  <slot
    :loginData="loginData"
    :loginRules="loginRules"
    :registrationRules="registrationRules"
    :registrationData="registrationData"
    :sendLogin="authStore.login"
    :sendRegistration="authStore.registration"
  />
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

  // TODO вынести все зн-ния валидации в константы, сделать переводы на ру для всех правил и их тоже в переменные
  // для инн добавить кастомный валидатор + русифицировать перевод

  const loginRules = yup.object({
    // email: yup.string().email().required().label('У сука бля'),
    // password: yup.string().min(5).max(20).required().label('УУУУУУУУУУУУУУУУУУ'),
  });

  const registrationRules = yup.object({
    // email: yup.string().email().required().label('У сука бля'),
    // name: yup.string().min(2).required().label('У сука бля'),
    // surname: yup.string().min(2).required().label('У сука бля'),
    // lastname: yup.string().min(2).required().label('У сука бля'),
    // inn: yup.number().required().label('У сука бля'),
    // uniqueBotId: yup.string().required().min(4).label('У сука бля'),
    // password: yup.string().min(5).max(20).required().label('УУУУУУУУУУУУУУУУУУ'),
  });

  defineSlots<IAuthControllerSlots<typeof authStore.login, typeof authStore.registration>>()
</script>
