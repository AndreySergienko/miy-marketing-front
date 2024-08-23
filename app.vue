<template>
  <AlertController />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <AppCookies />
</template>

<script setup lang="ts">
  import AlertController from "~/controllers/AlertController/AlertController.vue";
  import AppCookies from "./components/AppCookies/AppCookies.vue";
  </script>
