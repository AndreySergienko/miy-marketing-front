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
  import {validateInn} from '~/utils/INNValidation/InnValidation';
  const authStore = useAuthStore()

  const registrationData = reactive<IRegistrationRequest>({
    email: '',
    inn: null,
    fio: '',
    password: '',
    uniqueBotId: ''
  })


  const loginData = reactive<ILoginRequest>({
    email: '',
    password: ''
  })

  // TODO вынести все зн-ния валидации в константы, сделать переводы на ру для всех правил и их тоже в переменные
  // для инн добавить кастомный валидатор + русифицировать перевод

  const loginRules = yup.object({
    email: yup.string().email('Необходим формат почты').required('Обязательное поле для заполнения!').label(''),
    password: yup.string().min(5, 'Пароль дожен содержать не менее 5 символов').max(20, 'Пароль не может содержать более 20 символов').required('Обязательное поле для заполнения!').label(''),
  });

  const registrationRules = yup.object({
    email: yup.string().email('Необходим формат почты').required('Обязательное поле для заполнения!').label(''),
    fio: yup.string().min(2, 'Имя должно быть длинее не менее 2 символов').required('Обязательное поле для заполнения!').label(''),
    inn: yup.number()
      .transform((originalValue) => {
      const parsedValue = Number(originalValue);
      return isNaN(parsedValue) ? undefined : parsedValue;})
      .required('Обязательное поле для заполнения!').label('')
      .test('validateInn', 'Недопустимый ИНН', validateInn),
    uniqueBotId: yup.string().required('Обязательное поле для заполнения!').min(4, 'Id должен иметь длинну не менее 4 символов').label(''),
    password: yup.string().min(5, 'Пароль дожен содержать не менее 5 символов').max(20, 'Пароль не может содержать более 20 символов').required('Обязательное поле для заполнения!').label(''),
  });

  defineSlots<IAuthControllerSlots<typeof authStore.login, typeof authStore.registration>>()
</script>
