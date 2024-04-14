<template>
    <AuthController>
        <template #default="{ loginData, loginRules, sendLogin }">
          <AuthContainer>
            <template #title>Логин</template>
            <template #form>
                <VeeForm v-slot="{ errors, meta }" @submit="sendLogin" :validation-schema="loginRules">
                    <SharedInput name="email" v-model="loginData.email" type="text" :error="errors.email" />
                    <SharedInput name="password" v-model="loginData.password" type="text" :error="errors.password" />
<!--                    <SharedButton :disabled="!meta.valid">Submit</SharedButton>-->
                    <SharedButton >Submit</SharedButton >
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
