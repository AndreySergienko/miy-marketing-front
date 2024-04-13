<template>
    <AuthController ref="$authController">
        <template #default="{ login, sendLogin }">
          <AuthContainer>
            <template #title>Логин</template>
            <template #form>
              <SharedInput v-model="login.email"></SharedInput>
              <SharedInput v-model="login.password"></SharedInput>
              <SharedButton @click="sendLogin"></SharedButton>
            </template>
          </AuthContainer>
        </template>
    </AuthController>
</template>

<script setup lang="ts">
import AuthController from "~/controllers/AuthController/AuthController.vue";
import SharedButton from "~/components/SharedButtons/SharedButton.vue";

definePageMeta({
    layout: 'authentication'
})
</script>
