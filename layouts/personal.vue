<template>
  <AppHeader />
  <SharedPersonalNavigation />
  <div>
    <slot />
  </div>
  <AppFooter />
</template>

<script setup>
import SharedPersonalNavigation from "../components/SharedPersonalNavigation/SharedPersonalNavigation.vue";
import AuthStateController from "~/controllers/AuthStateController/AuthStateController.vue";
</script>
