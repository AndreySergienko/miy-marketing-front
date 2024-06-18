<template>
  <div class="main">
    <div class="categories" v-if="categoriesStore.categories.length">
      <div class="categories__inner">
        <SharedCategories 
         v-if="isAppTelegramVisible"
        :active-categories="activeCategories" 
        :categories-list="categories"
        @set-category="categoriesStore.updateActiveCategories"/>
      </div>
    </div>
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
    <div class="footer">
      <AppFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
  import AppBenefit from '../partials/AppBenefit.vue';
  import AppContacts from '../partials/AppContacts.vue';
  import AppFAQ from '../partials/AppFAQ.vue';
  import AppIntro from '../partials/AppIntro.vue';
  import AppTelegram from '../partials/AppTelegram.vue';
  import {useCategoriesStore} from "~/store/categories/categories.store";
  import { useChannelStore } from '~/store/channel/channel.store';

  const categoriesStore = useCategoriesStore()
  const channelStore = useChannelStore()
  // const {getAllFormat} = useChannelStore()
  const {categories, activeCategories} = storeToRefs(categoriesStore)
  const {getAll} = useCategoriesStore()

  const isAppTelegramVisible = ref(false);

  onMounted(() => {
  getAll();
  // getAllFormat();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };

  const unObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        isAppTelegramVisible.value = true;
      } else {
        isAppTelegramVisible.value = false;
      }
    });
  }, options);

  const appTelegramElement = ref(document.querySelector('.tg'));

  if (appTelegramElement.value) {
    unObserver.observe(appTelegramElement.value);
  }

  const handleAppTelegramVisibility = (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        isAppTelegramVisible.value = false;
      }
    });
  };

  const appTelegramObserver = new IntersectionObserver(handleAppTelegramVisibility, { threshold: 0.5 });
  appTelegramObserver.observe(appTelegramElement.value);
});
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
