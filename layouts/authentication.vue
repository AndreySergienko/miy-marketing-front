<template>
  <div class="container">
    <AppHeader />
  </div>
  <div class="logo">
    <NuxtImg class="logo__img" src="../public/DragonAuth.png" /> 
  </div>
  <AuthController>
    <slot />
  </AuthController>
</template>
<script setup>
import AuthController from "~/controllers/AuthController/AuthController.vue";

</script>
<style lang="scss" scoped>
template {
  position: relative;
}
  .logo {
    position: absolute;
    background-color: var(--color-blue);
    z-index: -1;
    width: 1920px;
    height: 854px;

    &__img {
      width: 50%;
    }
  }
</style>