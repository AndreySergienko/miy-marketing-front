<template>
  <section class="authentication-layout">
    <DefaultBack class="authentication-layout__back" @click="$router.back()" />
    <div class="authentication-layout__left">
      <NuxtImg
        class="authentication-layout__left-img"
        src="/dragon-new.png"
        sizes="257px lg:549px"
      />
    </div>
    <div class="authentication-layout__right">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "assets/styles/media";

.authentication-layout {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  font-family: "Inter", sans-serif;

  &__back {
    position: absolute;
    top: 30px;
    left: 20px;
    gap: 15px;
    color: var(--new-primary);
    font-size: 15px;
    font-weight: 500;

    @include media.media-breakpoint-up(md) {
      top: 40px;
      left: 30px;
    }

    @include media.media-breakpoint-up(lm) {
      left: 42px;
      color: var(--new-white);
    }

    @include media.media-breakpoint-up(xxl) {
      top: 60px;
      left: 55px;
    }
  }

  &__left {
    display: none;
    background: var(--new-primary);

    @include media.media-breakpoint-up(lm) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 410px;
    }

    @include media.media-breakpoint-up(l) {
      width: 752px;
    }

    @include media.media-breakpoint-up(xl) {
      width: 826px;
    }

    @include media.media-breakpoint-up(xxl) {
      width: 1266px;
    }

    &-img {
      width: 257px;

      @include media.media-breakpoint-up(l) {
        width: 549px;
      }
    }
  }

  &__right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
}
</style>
