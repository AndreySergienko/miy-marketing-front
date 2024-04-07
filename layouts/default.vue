<template>
  <div class="layout">
    <VHeader>
      <template #navigation>
        <VNavigation :nav="[]" />
      </template>
    </VHeader>
    <main class="layout__main">
      <slot></slot>
    </main>
  </div>
</template>
<script setup lang="ts">
import VHeader from "../components/Header/VHeader.vue";
import VNavigation from "../components/Navigation/VNavigation.vue";
</script>