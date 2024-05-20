<template>
  <AuthStateController>
    <template #default="{ isAuth, logout }">
      <AppHeader :is-auth="isAuth" :logout="logout" />
    </template>
  </AuthStateController>
  <section class="authentication">
    <div class="authentication__inner">
      <div class="authentication__logo" />
      <main class="authentication__info">
        <slot />
      </main>
    </div>
  </section>
</template>
<script setup lang="ts">
import AppHeader from "~/components/AppHeader/AppHeader.vue";
import AuthStateController from "~/controllers/AuthStateController/AuthStateController.vue";
</script>
<style lang="scss" scoped>
  @use 'assets/styles/media';
  .authentication{
    &__inner {
      display: flex;
      background-color: var(--color-blue);

      @include media.media-breakpoint-down(l) {
        margin-top: var(--indent-3xl);
        background-color: var(--color-white);
        justify-content: center;
      }

    }

    &__logo {
      background: url(../public/dragon__white.png) no-repeat;
      height: 100%;
      min-height: calc(100vh - 49px);
      background-size: cover;
      width: 100%;

      @include media.media-breakpoint-down(l) {
        display: none;
      }
    }

    &__info {
      display: flex;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 48px 0 0 48px;
      background-color: var(--color-white);
      width: 100%;

      @include media.media-breakpoint-down(l) {
        justify-content: center;
        width: 100%;
      }
    }
  }
</style>
