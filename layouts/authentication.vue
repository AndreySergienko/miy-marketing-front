<template>
  <AuthController>
    <slot />
  </AuthController>
</template>
<script setup>
import AuthController from "~/controllers/AuthController/AuthController.vue";
</script>