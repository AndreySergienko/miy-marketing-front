<template>
  <div :class="['id-bot', isShow && 'show']" @mousemove="openShow" @mouseenter="openShow">
    <nuxt-icon class="id-bot__icon" name="question" filled />
    <div class="id-bot__inner">
      <div class="id-bot__title">Уникальный id</div>
      <div class="id-bot__text">Вы сможете получить уникальный id через нашего <nuxt-link to="https://t.me/miy_ad_bot">тг бота</nuxt-link>. Для <br>
        начала напишите в строке “/start”. Убедительная просьба <br>
        использовать один аккаунт при получении id и при будущем <br>
        осуществлении рекламы. В обязательно порядке при <br>
        размещении рекламы в тг каналах вы должны быть админом.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isShow = ref<boolean>(false)

const openShow = () => {
  if (isShow.value) return;
  window.addEventListener('click', closeShow)
  isShow.value = true
}

function closeShow() {
  // console.log('click')
  window.removeEventListener('click', closeShow)
  isShow.value = false
}
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .id-bot {
    margin-left: var(--indent-s);
    &.show {
      .id-bot__inner {
        display: block;
      }
    }
    &__inner {
      position: absolute;
      padding: var(--indent-l);
      display: none;
      background-color: var(--color-white);
      transition: all 0.3s;
      border: 1px solid var(--color-light-gray);
      border-radius: 24px;

      @include media.media-breakpoint-down(sm) {
        left: 10px;
      }
    }

    &__title {
      font-size: var(--font-size-s);
      margin-bottom: var(--indent-m);

      @include media.media-breakpoint-down(sm) {
        font-size: 14px;
      }
    }
    &__text {
      font-size: 14px;

      @include media.media-breakpoint-down(sm) {
        font-size: 10px;
      }
    }
  }
</style>
