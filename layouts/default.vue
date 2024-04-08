<template>
  <div class="container">
    <AppHeader />
  </div>
  <div>
    <slot/>
  </div>
</template>

<script setup>
  import AppHeader from '../components/AppHeader/AppHeader.vue';
</script>