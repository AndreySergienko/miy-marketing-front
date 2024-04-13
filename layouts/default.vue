<template>
  <div class="container">
    <AppHeader />
  </div>
  <slot/>
</template>

<script setup>
  import AppHeader from '../components/AppHeader/AppHeader.vue';
</script>