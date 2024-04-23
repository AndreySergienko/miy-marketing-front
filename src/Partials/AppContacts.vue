<template>
  <div class="contacts">
    <div class="container">
      <shared-animation>
        <div class="contacts__inner">
          <SharedContacts />
          <iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ac83c30029fc4deea7465f04dbaec8f68c6459c2bdfc053d2e1d31405ed4ec8&amp;source=constructor" width="900" height="500" frameborder="0"></iframe>
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .contacts {
    padding: 0 15px;
    margin-bottom: var(--ident-xxls);

    &__inner {
      display: flex;
      align-items: center;
      padding: var(--ident-adaptive-xxl) 0px;

      @include media.media-breakpoint-down(l) {
        padding: 0 var(--ident-lx);
        flex-direction: column;
      }
    }

    &__map {
      border: 1px solid var(--color-light-gray);
      border-radius: 50px;
      width: 90%;

      @include media.media-breakpoint-down(sm) {
        height: 250px;
      }
    }
  }
</style>