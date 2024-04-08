<template>
  <div class="main">
    <div class="attention">
      <div class="attention__inner">
        <nuxt-icon class="attention__icon" name="login" filled/>
        <span class="attention__title">Нужна авторизация</span>
        <span class="attention__text">Для дальнейшего посещения сайта просим вас авторизироваться, или войти в свой аккаунт</span>
        <div class="attention__btn">
          <VButton className="l"> Войти </VButton>
          <VButton className="r"> Зарегистрироваться </VButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VButton from '../components/VButtons/VButton.vue';
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  background-color: gray;
  height: 100vh;
}
  .attention {
    position: absolute;
    z-index: 1;
    background-color: var(--color-light-gray);
    border: 1px solid var(--color-light-gray);
    border-radius: 30px;

    &__inner {
      padding: 0px 48px 48px;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 48px;
    }

    &__icon {
      font-size: 145px;
    }

    &__title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
    }

    &__text {
      width: 656px;
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      color: var(--color-dark-gray);
    }
  }
</style>