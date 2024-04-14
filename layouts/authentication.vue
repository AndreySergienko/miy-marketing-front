<template>
  <section class="authentication">
    <div class="container">
      <AppHeader />
    </div>

    <div class="authentication__inner">
      <div class="authentication__logo" />
      <main class="authentication__info">
        <slot />
      </main>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
  .authentication{ 

    &__inner {
      display: flex;
      justify-content: flex-end;
    }

    &__logo {
      position: absolute;
      background: url(../public/DragonAuth.png) no-repeat;
      background-color: var(--color-blue);
      z-index: -1;
      width: 1920px;
      height: 854px;
    }

    &__info {
      padding-left: 86px;
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 48px 0 0 48px;
      background-color: var(--color-white);
      width: 45%;
      height: 854px;
    }
  }
</style>