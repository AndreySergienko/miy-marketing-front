<template>
  <slot :is-auth="authStore.isAuth" :logout="authStore.logout" />
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/auth/auth.store";

const authStore = useAuthStore()
</script>
