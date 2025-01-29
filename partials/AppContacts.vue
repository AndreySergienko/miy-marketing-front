<template>
  <div class="contacts" id="contact">
    <div class="container">
      <shared-animation>
        <div class="contacts__inner">
          <SharedContacts />
          <iframe
            class="contacts__map" 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A52be1ab397af5f79b40d92aee7745010e7a1bcd7eed0e14b2e63c7a1ce32c234&amp;source=constructor"
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
