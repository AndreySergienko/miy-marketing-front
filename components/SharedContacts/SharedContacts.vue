<template>
  <div class="contact">
    <div class="contact__intro">
      <div class="contact__title">
        <SharedTitle>Контакты</SharedTitle>
        <SharedText>
          Всегда рады Вам помочь и выслушать предложения.
        </SharedText>
      </div>
      <div class="contact__items">
        <div class="contact__item">
          <h3 class="contact__item-title">Email</h3>
          <SharedText>miy@on-developer.ru</SharedText>
        </div>
        <div class="contact__item">
          <h3 class="contact__item-title">TG-канал</h3>
          <SharedText>https://t.me/ON_DEVELOPER</SharedText>
        </div>
        <div class="contact__item">
          <h3 class="contact__item-title">Адрес</h3>
          <SharedText>121471, Г.МОСКВА, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ ОЧАКОВО-МАТВЕЕВСКОЕ, УЛ РЯБИНОВАЯ, Д. 26, СТР. 1, ПОМЕЩ. 115</SharedText>
        </div>
        <div class="contact__item">
          <h3 class="contact__item-title">ИНН</h3>
          <SharedText>9729376921</SharedText>
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
      gap: var(--indent-m);

      @include media.media-breakpoint-down(sm) {
        gap: 0;
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