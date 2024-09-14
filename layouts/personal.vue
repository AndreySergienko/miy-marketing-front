<template>
  <section class="personal-layout">
    <AppHeader />
    <main>
      <PersonalNavigation />
    </main>
    <AppFooter />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "assets/styles/media";

.personal-layout {
  main {
    padding: 30px 16px 80px;
    background: #f8f8f8;

    @include media.media-breakpoint-up(md) {
      padding: 65px 30px 190px;
    }

    @include media.media-breakpoint-up(lm) {
      padding: 69px 40px 207px;
    }

    @include media.media-breakpoint-up(l) {
      padding: 60px 60px 195px;
    }

    @include media.media-breakpoint-up(xl) {
      padding: 60px 140px 80px;
    }

    @include media.media-breakpoint-up(xxl) {
      padding: 78px 140px 178px;
    }
  }
}
</style>
