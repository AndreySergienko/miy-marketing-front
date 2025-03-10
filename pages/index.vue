<template>
  <div class="main">
    <div class="logo" />
    <div class="intro">
      <AppIntro />
    </div>
    <div class="benefit">
      <AppBenefit />
    </div>
    <div class="tg" ref="appTelegram">
      <AppTelegram />
    </div>
    <div class="FAQ">
      <AppFAQ />
    </div>
    <div class="contacts">
      <AppContacts />
    </div>
  </div>
</template>
<script setup lang="ts">
import AppBenefit from "../partials/AppBenefit.vue";
import AppContacts from "../partials/AppContacts.vue";
import AppFAQ from "../partials/AppFAQ.vue";
import AppIntro from "../partials/AppIntro.vue";
import AppTelegram from "../partials/AppTelegram.vue";
</script>

<style lang="scss" scoped>
@use "assets/styles/media";

.main {
  position: relative;
  overflow: hidden;
}

.logo {
  position: absolute;
  background: url(../public/dragon_1.png) no-repeat;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-size: 50%;
  top: -8vh;
  left: 50vw;

  @include media.media-breakpoint-down(xl) {
    top: -4vh;
  }

  @include media.media-breakpoint-down(md) {
    display: none;
  }

  @include media.media-breakpoint-down(sm) {
    display: none;
  }
}
</style>
