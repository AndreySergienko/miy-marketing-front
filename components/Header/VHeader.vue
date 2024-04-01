<template>
  <div>
    <div class="header">
      <div class="header__container">
        <div class="header__inner">
          <h1 class="header__title">ON DEVELOPER</h1>
          <Navigation />
          <div class="header__button">
            <VButtonLogIn />
            <VButtonRegistration />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import VButtonLogIn from '../Buttons/Header buttons/VButtonLogIn.vue'
  import VButtonRegistration from '../Buttons/Header buttons/VBUttonRegistration.vue'
</script>

<style lang="scss" scoped>
  .header__container {
    max-width: 1600px;
    margin: 0 auto;
  }

  .header {
    margin-bottom: var(--ident-xxxl);
    border-bottom: 1px solid var(--color-light-gray);

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: var(--ident-xs) 0px;
    }

    &__title {
      font-size: var( --font-size-l);
      font-weight: var(--font-weight-bold);
    }

    &__button {
      display: flex;
    }
  }
</style>