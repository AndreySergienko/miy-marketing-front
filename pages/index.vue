<template>
  <div class="main">
    <div class="categories">
      <div class="container">
        <div class="categories__inner">
          <SharedCategories />
        </div>
      </div>
    </div>
    <div class="logo" />
    <div class="intro">
      <AppIntro />
    </div>
    <div class="benefit">
      <AppBenefit />
    </div>
    <div class="tg">
      <AppTelegram />
    </div>
    <div class="more">
      <p class="more__text">Смотреть еще</p>
      <nuxt-icon class="more__icon" name="arrow" filled/>
    </div>
    <div class="FAQ">
      <AppFAQ />
    </div>
    <div class="contacts">
      <AppContacts />
    </div>
    <div class="footer">
      <AppFooter />
    </div>
  </div>
</template>
 <script setup>
  import AppBenefit from '../src/Partials/AppBenefit.vue';
  import AppContacts from '../src/Partials/AppContacts.vue';
  import AppFAQ from '../src/Partials/AppFAQ.vue';
  import AppIntro from '../src/Partials/AppIntro.vue';
  import AppTelegram from '../src/Partials/AppTelegram.vue';
</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';

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
    left: 990px;
    top: -25px;
    

    @include media.media-breakpoint-down(xl) {
      top: -10px;
      left: 680px;
      background-size: 60%;
    }

    @include media.media-breakpoint-down(l) {
      top: 90px;
      left: 525px;
      background-size: 50%;
    }

    @include media.media-breakpoint-down(sm) {
      display: none;
    }

    @include media.media-breakpoint-down(md) {
        display: none;
      }
  }

  .more {
    margin-bottom: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &__text {
      font-size: var( --font-size-m);
      font-weight: var(--font-weight-medium);
      margin-right: var(--ident-m);

      @include media.media-breakpoint-down(sm) {
        font-size: 14px;
      }
    }

    &__icon {
      font-size: 24px;
    }
  }
</style>
