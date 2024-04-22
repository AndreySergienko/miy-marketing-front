<template>
  <div class="intro">
    <div class="container">
      <shared-animation>
        <div class="intro__inner">
          <SharedTitle class="intro__title"> Ut enim ad minim veniam, quis nostrud exercitation </SharedTitle>
          <SharedText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
            laboris nisi ut aliquip ex ea commodo consequat.</SharedText>
        </div>
      </shared-animation>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @use 'assets/styles/media';
  .intro {
    margin-bottom: var(--ident-xxls);

    @include media.media-breakpoint-down(xl) {
      padding: 0 var(--ident-lx);
    }

    &__inner {
      padding: --ident-xxl 0;
      width: 55%;

      @include media.media-breakpoint-down(md) {
        padding: 0;
        width: 80%;
      }

      @include media.media-breakpoint-down(sm) {
        padding: 0;
        width: 100%;
      }
    }

    &__title {
      @include media.media-breakpoint-down(l) {
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-bold);
      }

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-mx);
        font-weight: var(--font-weight-bold);
      }
    }
  }
</style>