<template>
  <div class="container">
    <div class="cookies" v-if="!cookiesAccepted">
      <div class="cookies__inner">
        <div class="cookies__text">
          <p>Мы собираем куки. Без них никак.</p>
          <a href="/Cookies/Cookies.pdf" target="_blank" rel="noopener noreferrer">Подробнее...</a>
        </div>
        <div class="cookies__btn">
          <SharedButton size="xs" color="blue" @click="acceptCookies">OK</SharedButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCookiesStore } from '@/store/cookies/cookies.store';

const { cookiesAccepted, acceptCookies } = useCookiesStore();
</script>

<style lang="scss" scoped>
@use 'assets/styles/media';

  .cookies {
    position: fixed;
    bottom: 20px;
    left: 13%;
    transform: translateX(-50%); 
    z-index: 999;
    width: 500px;
    padding: var(--indent-l);
    background-color: var(--color-white);
    border: 1px solid var(--color-light-gray);
    border-radius: 10px;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
    transition: opacity 0.5s ease;

    @include media.media-breakpoint-down (xl) {
      left: 20%
    }

    @include media.media-breakpoint-down (l) {
      left: 25%
    }

    @include media.media-breakpoint-down (md) {
      left: 30%
    }

    @include media.media-breakpoint-down (sm) {
      width: 330px;
      left: 50%
    }

    &.fade__out {
    opacity: 0;
  }

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      @include media.media-breakpoint-down (sm) {
      flex-direction: column;
    }
    }

    &__text {
      display: flex;
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-semi-bold);
      gap: 5px;

      @include media.media-breakpoint-down (sm) {
      flex-direction: column;
      align-items: center;
    }

      & a {
        color: var(--color-blue);
        font-weight: var(--font-weight-semi-bold);
        text-decoration: none;
      }
    }
  }
</style>