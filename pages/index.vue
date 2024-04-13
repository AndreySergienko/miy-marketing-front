<template>
  <div class="main">
    <div class="categories">
      <div class="container">
        <div class="categories__inner">
          <SharedCategories />
        </div>
      </div>
    </div>
    <NuxtImg class="logo" src="../public/Dragon.png" />
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
  import AppBenefit from '../components/Partials/AppBenefit.vue';
  import AppContacts from '../components/Partials/AppContacts.vue';
  import AppFAQ from '../components/Partials/AppFAQ.vue';
  import AppIntro from '../components/Partials/AppIntro.vue';
  import AppTelegram from '../components/Partials/AppTelegram.vue';
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    overflow: hidden;
  }

  .logo {
    position: absolute;
    background-size: cover;
    z-index: -1;
    width: 55%;
    left: 1120px;
    top: 60px;
    transform: rotate(-17deg);
  }

  .more {
    margin-bottom: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &__text {
      font-size: var( --font-size-m);
      font-weight: var(--font-weight-medium);
      margin-right: var(--ident-m);
    }

    &__icon {
      font-size: 24px;
    }
  }
</style>
