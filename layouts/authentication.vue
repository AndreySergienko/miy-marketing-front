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
      height: 73vh;
      background-color: var(--color-blue);

      @include media.media-breakpoint-down(xl) {
        height: 59vh;
      }

      @include media.media-breakpoint-down(l) {
        background-color: var(--color-white);
        justify-content: center;
      }
    }

    &__logo {
      background: url(../public/DragonAuth.png) no-repeat;
      background-size: 100%;
      width: 100%;
      height: 100%;

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
      width: 100%;

      @include media.media-breakpoint-down(xl) {
        width: 80%;
      }

      @include media.media-breakpoint-down(l) {
        justify-content: center;
        width: 100%;
        padding: 0 var( --ident-adaptive-xm);
      }

      @include media.media-breakpoint-down(sm) {
        padding: 0 var(--ident-l);
      }
    }
  }
</style>
