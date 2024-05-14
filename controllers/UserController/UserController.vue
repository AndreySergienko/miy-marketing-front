<template>
  <slot
    :userData="userStore.user"
    :userRules="userRules"
    :sendUser="update"
  />
</template>

<script setup lang="ts">
  import * as yup from 'yup'
  import { useUserStore } from '~/store/user/user.store';
  import type { IUserControllerSlots } from './UserController.types';
  import {validateInn} from '~/utils/validator.ts/inn.validator';
  import type {IUserRequest} from "~/api/methods/user/user.types";

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const update = async () => {
    if (!user.value) return;
    const userRequest: IUserRequest = {
      inn: user.value.inn,
      fio: user.value.fio,
      cardNumber: user.value.cardNumber,
      email: user.value.email,
      isNotification: true,
    }
    await userStore.updateUser(userRequest)
  }

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
