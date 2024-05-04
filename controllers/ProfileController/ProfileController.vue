<template>
  <slot 
    :profileData="profileData"
    :profileRules="profileRules"
    :sendProfile="profileStore.profile"
  />
</template>

<script setup lang="ts">
  import * as yup from 'yup'
  import { useProfileStore } from '~/store/profile/profile.store';
  import type { IProfileRequest } from '~/api/methods/profile/profile.types';
  import { IProfileControllerSlots } from './ProfileController.types';

  const profileStore = useProfileStore()

  const profileData = reactive<IProfileRequest>({
    fio: '',
    inn: null,
    email: '',
  })

  const profileRules = yup.object({
    email: yup.string().email().required().label('Почта'),
    fio: yup.string().min(6).required().label('ФИО'),
    inn: yup.number().required().label('ИНН')
  })

  defineSlots<IProfileControllerSlots<typeof profileStore.profile>>()
</script>