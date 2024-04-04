<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <VNavigation />
        </div>
        <div class="footer__intro">
          <div class="footer__intro-title">
            <h3>ОN DEVELOPER</h3>
            <p>Разработка сайта <span class="studio">Я</span>Р студия</p>
            <p>© ОN DEVELOPERс 2021-2024</p>
          </div>
          <div class="footer__intro-contacts">
            <div class="footer__intro-contacts__email">
              <nuxt-icon class="footer__icon" name="email" />
              <span class="footer__icon-text">ON-Developer@gmail.com</span>
            </div>
            <div class="footer__intro-contacts__web">
              <nuxt-icon class="footer__icon" name="tg" />
              <span class="footer__icon-text">https://t.me/ON-Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VNavigation from '../components/Navigation/VNavigation.vue'
</script>

<style lang="scss" scoped>
  .footer {
    border-top: 1px solid var(--color-light-gray);

    &__inner {
      padding: 48px 0px var(--ident-xs);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__nav {
      margin-bottom: var(--ident-xl);
    }

    &__intro {
      display: flex;
      justify-content: space-between;
      width: 100%;

      &-contacts {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__email, &__web {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        &__email {
          margin-bottom: 2px;
        }
      }
    }

    &__icon {
      font-size: 24px;
      margin-right: 10px;
    }

    &__icon-text {
      font-size: var(--font-size-m);
      font-weight: var(-font-weight-medium);
    }
  }

  h3, p {
    margin-bottom: 10px;
  }

  h3 {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
  }

  p {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
  }

  .studio {
    color: red;
  }
  
</style>