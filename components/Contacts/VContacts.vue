<template>
  <div class="contacts">
    <div class="contacts__inner">
      <div class="contacts__intro">
        <div class="contacts__title">
          <VTitle>Контакты</VTitle>
          <VText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </VText>
        </div>
        <div class="contacts__items">
          <div class="contacts__item">
            <h3 class="contacts__item-title">Email</h3>
            <VText>ON-Developer@gmail.com</VText>
          </div>
          <div class="contacts__item">
            <h3 class="contacts__item-title">Тг канал</h3>
            <VText>https://t.me/ON-Developer</VText>
          </div>
          <div class="contacts__item">
            <h3 class="contacts__item-title">Адрес</h3>
            <VText>Вятская улица, 47с2А, Москва, 127015</VText>
          </div>
          <div class="contacts__item">
            <h3 class="contacts__item-title">ИНН</h3>
            <VText>902729038037</VText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VTitle from '../Title/VTitle.vue';
  import VText from '../Text/VText.vue';
</script>

<style lang="scss" scoped>
  .contacts {
    &__intro {
      display: flex;
      flex-direction: column;
      width: 80%;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }

    &__item-title {
      font-size: var(--font-size-l);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--ident-m);
    }
  }
</style>