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
  @use 'assets/styles/media';
  .authentication{ 

    &__inner {
      position: relative;
      display: flex;
      justify-content: flex-end;

      @include media.media-breakpoint-down(l) {
        justify-content: flex-start;
      }
    }

    &__logo {
      position: absolute;
      background: url(../public/DragonAuth.png) no-repeat;
      background-color: var(--color-blue);
      z-index: -1;
      width: 100%;
      height: 854px;

      @include media.media-breakpoint-down(l) {
        display: none;
      }
    }

    &__info {
      padding: 0 var(--ident-adaptive-xxxl);
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 48px 0 0 48px;
      background-color: var(--color-white);
      height: 854px;
      width: 42%;

      @include media.media-breakpoint-down(xl) {
        width: 40%;
      }

      @include media.media-breakpoint-down(l) {
        width: 70%;
        padding: 0 var( --ident-adaptive-xm);
      }

      @include media.media-breakpoint-down(sm) {
        height: 100%;
        padding: 0 var(--ident-l);
      }
    }
  }
</style>
