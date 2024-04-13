<template>
  <div class="container">
    <AppHeader />
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
</script>