<template>
  <div :class="['forgot-password', isShow && 'show']" @mousemove="openShow" @mouseenter="openShow">
    <div class="forgot-password__title">
      <span>Забыли пароль</span>
      <nuxt-icon name="lock" filled/>
    </div>
    <div class="forgot-password__inner">
      <div class="forgot-password__text">
        Забыли пароль?<br>Просто введите свою почту для восстановления. После нажатия
        кнопки "Восстановить" вы получите инструкции на указанный адрес электронной
        почты.
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const isShow = ref<boolean>(false)

  const openShow = () => {
    if(isShow.value) return;
    window.addEventListener('click', closeShow)
    isShow.value = true
  }

  const closeShow = () => {
    window.removeEventListener('click', closeShow)
    isShow.value = false
  }
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .forgot-password {
    &.show {
      .forgot-password__inner {
        display: block;
      }
    }

    &__title {
      display: flex;
      align-items: center;
      gap: var(--indent-s);
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-medium);
      color: var(--color-blue);
    }

    &__inner {
      padding: var(--indent-l);
      position: absolute;
      left: 58%;
      display: none;
      width: 370px;
      z-index: 1;
      background-color: var(--color-white);
      color: var(--color-black);
      border: 1px solid var(--color-light-gray);
      border-radius: 24px;
      transition: all 0.3s;
      font-size: 14px;

      @include media.media-breakpoint-down(xl) {
        left: 60%;
      }
      @include media.media-breakpoint-down(l) {
        left: 44%;
      }
      @include media.media-breakpoint-down(md) {
        left: 42%;
      }
      @include media.media-breakpoint-down(sm) {
        left: 30%;
        width: 240px;
        font-size: 10px;
      }
    }
  }
</style>