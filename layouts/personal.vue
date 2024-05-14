<template>
  <div class="container">
    <AuthStateController>
      <template #default="{ isAuth, logout }">
        <AppHeader :is-auth="isAuth" :logout="logout" />
      </template>
    </AuthStateController>
  </div>
  <SharedPersonalNavigation />
  <div>
    <slot/>
  </div>
  <AppFooter />
</template>

<script setup>
  import AppHeader from '../components/AppHeader/AppHeader.vue';
  import AppFooter from '../components/AppFooter/AppFooter.vue';
  import SharedPersonalNavigation from '../components/SharedPersonalNavigation/SharedPersonalNavigation.vue';
  import AuthStateController from "~/controllers/AuthStateController/AuthStateController.vue";
</script>
