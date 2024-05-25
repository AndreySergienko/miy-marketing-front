<template>
  <AuthStateController>
    <template #default="{ isAuth, logout }">
      <AppHeader :is-auth="isAuth" :logout="logout"/>
    </template>
  </AuthStateController>
  <slot/>
</template>

<script setup>
  import AppHeader from '../components/AppHeader/AppHeader.vue';
  import AuthStateController from "~/controllers/AuthStateController/AuthStateController.vue";
</script>
