<template>
  <slot
    :userData="userData"
    :userRules="userRules"
    :sendUser="userStore.user"
  />
</template>

<script setup lang="ts">
  import * as yup from 'yup'
  import { useUserStore } from '~/store/user/user.store';
  import type { IUserRequest } from '~/api/methods/user/user.types';
  import { IUserControllerSlots } from './UserController.types';
  import {validateInn} from '~/utils/validator.ts/inn.validator';


  const userStore = useUserStore()

  const userData = reactive<IUserRequest>({
    fio: '',
    inn: null,
    email: '',
    card: '',
  })


  const userRules = yup.object({
    email: yup.string().email('Необходим формат почты').required('Обязательное поле для заполнения!').label(''),
    fio: yup.string().min(6, 'Поле дожно содержать не менее 6 символов').required('Обязательное поле для заполнения!').label(''),
    inn: yup.number()
      .transform((originalValue) => {
      const parsedValue = Number(originalValue);
      return isNaN(parsedValue) ? undefined : parsedValue;})
      .required('Обязательное поле для заполнения!').label('')
      .test('validateInn', 'Недопустимый ИНН', validateInn),
    card: yup.number().required('Обязательное поле для заполнения!').label('')
  })

  defineSlots<IUserControllerSlots<typeof userStore.user>>()
</script>
