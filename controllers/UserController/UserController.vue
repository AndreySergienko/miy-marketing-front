<template>
  <slot
    :userData="user"
    :userRules="userRules"
    :sendUser="update"
    :isLoading="userStore.isLoading"
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
      inn: Number(user.value.inn),
      fio: user.value.fio,
      cardNumber: user.value.cardNumber,
      email: user.value.email,
      isNotification: true,
    }
    await userStore.updateUser(userRequest)
  }


  const userRules = yup.object({
    email: yup.string().email(rules.email).required(rules.required).label(''),
    fio: yup.string().min(8, rules.minName).required(rules.required).label(''),
    inn: yup.number().required(rules.required).label('').test('validateInn', rules.inn, validateInn),
    // cardNumber: yup.string().min(16, rules.minNumberCard).max(16, rules.maxNumberCard).required(rules.required).label('')
  })

  defineSlots<IUserControllerSlots<typeof userStore.user>>()
</script>
