<template>
  <div class="profile">
    <div class="profile__img"/>
    <div class="profile__form"><slot name="form" /></div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .profile {
    position: relative;
    overflow: hidden;
    &__img {
      position: absolute;
      background: url(../../public/Dragon.png) no-repeat;
      width: 100%;
      height: 100%;
      top: 5vh;
      left: 49vw;

      @include media.media-breakpoint-down(l) {
        background-size: 60%;
      }

      @include media.media-breakpoint-down(md) {
        display: none;
      }
    }

    &__form {
      padding: 0 var(--indent-l);
    }

  }
</style>