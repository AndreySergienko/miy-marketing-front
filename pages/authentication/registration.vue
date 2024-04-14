<template>
  <AuthController>
    <template #default="{ registrationRules, registrationData, sendRegistration }">
      <AuthContainer>
        <template #title>Логин</template>
        <template #form>
          <VeeForm v-slot="{ errors, meta }" @submit="sendRegistration" :validation-schema="registrationRules">
            mail
            <SharedInput name="email" v-model="registrationData.email" type="text" :error="errors.email" />
            ps
            <SharedInput name="password" v-model="registrationData.password" type="text" :error="errors.password" />
            name
            <SharedInput name="name" v-model="registrationData.name" type="text" :error="errors.name" />
            surname
            <SharedInput name="surname" v-model="registrationData.surname" type="text" :error="errors.surname" />
            <SharedInput name="lastname" v-model="registrationData.lastname" type="text" :error="errors.lastname" />
            unqi
            <SharedInput name="uniqueBotId" v-model="registrationData.uniqueBotId" type="text" :error="errors.uniqueBotId" />
            inn
            <SharedInput name="inn" v-model="registrationData.inn" type="text" :error="errors.inn" />
<!--            <SharedButton :disabled="!meta.valid">Submit</SharedButton>-->
            <SharedButton>Submit</SharedButton>
          </VeeForm>
        </template>
      </AuthContainer>
    </template>
  </AuthController>
</template>

<script setup lang="ts">
import AuthController from "~/controllers/AuthController/AuthController.vue";


definePageMeta({
  layout: 'authentication'
})
</script>
