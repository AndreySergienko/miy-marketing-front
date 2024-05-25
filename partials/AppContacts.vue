<template>
  <div class="contacts" id="contact">
    <div class="container">
      <shared-animation>
        <div class="contacts__inner">
          <SharedContacts />
          <iframe
            class="contacts__map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ac83c30029fc4deea7465f04dbaec8f68c6459c2bdfc053d2e1d31405ed4ec8&amp;source=constructor"
            width="900"
            height="500"
          ></iframe>
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  @use 'assets/styles/mixins';
  .contacts {
    @include mixins.indent;
    margin-bottom: var(--indent-5xl);

    &__inner {
      display: flex;
      align-items: center;
      padding: var(--indent-4xl) 0;

      @include media.media-breakpoint-down(l) {
        padding: 0 var(--indent-l);
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
