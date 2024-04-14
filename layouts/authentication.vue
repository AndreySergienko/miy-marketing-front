<template>
  <section class="authentication">
    <div class="container">
      <AppHeader />
    </div>

    <div class="authentication__inner">
<!--   TODO фон с драконом задать через css   -->
      <div class="authentication__logo"></div>
      <main class="authentication__info">
        <slot />
      </main>
    </div>
  </section>
  <main>
    <slot />
  </main>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
</style>