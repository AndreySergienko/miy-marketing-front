<template>
  <div class="contact">
    <div class="contact__intro">
      <div class="contact__title">
        <SharedTitle>Контакты</SharedTitle>
        <SharedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </SharedText>
      </div>
      <div class="contact__items">
        <div class="contact__item">
          <h3 class="contact__item-title">Email</h3>
          <SharedText>ON-Developer@gmail.com</SharedText>
        </div>
        <div class="contact__item">
          <h3 class="contact__item-title">Тг канал</h3>
          <SharedText>https://t.me/ON-Developer</SharedText>
        </div>
        <div class="contact__item">
          <h3 class="contact__item-title">Адрес</h3>
          <SharedText>Вятская улица, 47с2А, Москва, 127015</SharedText>
        </div>
        <div class="contact__item">
          <h3 class="contact__item-title">ИНН</h3>
          <SharedText>902729038037</SharedText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SharedTitle from '../SharedTitle/SharedTitle.vue';
  import SharedText from '../SharedText/SharedText.vue';
</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .contact {
    &__intro {
      display: flex;
      flex-direction: column;
      width: 100%;

      @include media.media-breakpoint-down(xl) {
        width: 95%;
      }

    }

    &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @include media.media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
      }
    }

    &__item-title {
      font-size: var(--font-size-l);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--indent-s);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-m);
      }
    }
  }
</style>