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
    await authStore.registration(registrationData)
  }

  const login = async () => {
    await authStore.login(loginData)
  }

  const required = 'Обязательное поле для заполнения'
  const email = 'Необходимый формат почты'
  const minPassword = 'Пароль дожен содержать не менее 5 символов'
  const maxPassword = 'Пароль не может содержать более 20 символов'
  const minName = 'Имя должно быть длинее не менее 2 символов'
  const minId = 'Id должен иметь длинну не менее 4 символов'
  const inn = 'Недопустимый ИНН'

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
  });

  defineSlots<IAuthControllerSlots<typeof authStore.login, typeof authStore.registration>>()
</script>
