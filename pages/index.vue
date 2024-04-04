
<template>
  <div class="main">
    <div class="header">
      <div class="container">
        <div class="header__inner">
          <VHeader />
          <VCategories />
        </div>
      </div>
    </div>
    <NuxtImg class="logo" src="../public/Dragon.png" />
    <div class="intro">
      <div class="container">
        <div class="intro__inner">
          <VTitle> Ut enim ad minim veniam, quis nostrud exercitation </VTitle>
          <VText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
            laboris nisi ut aliquip ex ea commodo consequat.</VText>
        </div>
      </div>
    </div>
    <div class="benefit">
      <div class="container">
        <div class="benefit__inner">
          <div class="benefit__text">
            <VTitle> Наши преимущества </VTitle>
            <VText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br>
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br>
              consequat.
            </VText>
            <VText>Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor <br>
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br> 
               nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </VText>
          </div>
          <Benefit />
        </div>
      </div>
    </div>
    <div class="tg">
      <div class="container">
        <div class="tg__inner">
          <div class="tg__text">
            <VTitle>ТГ-каналы</VTitle>
            <VText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
            </VText>
          </div>
          <div class="card__list">
            <Card
              v-for="index in 9" :key="index"  
              
              price="300 р"
              people= "12 000"
              advertising= "1/24"
              new-people= "376" 
            />
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <p class="more__text">Смотреть еще</p>
      <nuxt-icon class="more__icon" name="arrow" filled/>
    </div>
    <div class="FAQ">
      <div class="container">
        <div class="FAQ__inner">
          <div class="FAQ__text">
            <VTitle>FAQ</VTitle>
            <VText>Часто задоваемые нам вопросы на которые уже есть ответы</VText>
          </div>
          <VAccordion />
        </div>
      </div>
    </div>
    <div class="contacts">
      <div class="container">
        <div class="contacts__inner">
          <VContacts />
          <iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ac83c30029fc4deea7465f04dbaec8f68c6459c2bdfc053d2e1d31405ed4ec8&amp;source=constructor" width="900" height="500" frameborder="0"></iframe>
        </div>
      </div>
    </div>
    <div class="footer">
      <VFooter />
    </div>
  </div>
</template>
<script setup>
  import VHeader from '../components/Header/VHeader.vue';
  import Benefit from '../components/Benefit/Benefit.vue';
  import Card from '../components/Card/VCard.vue'
  import VTitle from '../components/Title/VTitle.vue'
  import VText from '../components/Text/VText.vue'
  import VAccordion from '../components/Accordion/VAccordion.vue'
  import VContacts from '../components/Contacts/VContacts.vue';
  import VFooter from '../components/Footer/VFooter.vue'
  import VCategories from '../components/Categories/VCategories.vue';
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    overflow: hidden;
  }

  .logo {
    position: absolute;
    background-size: cover;
    z-index: -1;
    width: 55%;
    left: 1120px;
    top: 140px;
    transform: rotate(-17deg);
  }

  .intro {
    margin-bottom: 200px;

    &__inner {
      padding: 64px 0px;
      width: 55%;
    }
  }

  .benefit {
    margin-bottom: 200px;

    &__inner {
      padding: 80px 0px;
      display: flex;
      justify-content: space-between;
    }

    &__text {
      width: 80%;
      margin-bottom: var(--ident-xxl);
    }
  }

  .tg {
    margin-bottom: 120px;

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &__text {
      width: 50%;
      text-align: center;
      margin-bottom: var(--ident-xxl);
    }
  }

  .card__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ident-xm);
  }

  .more {
    margin-bottom: 200px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &__text {
      font-size: var( --font-size-m);
      font-weight: var(--font-weight-medium);
      margin-right: var(--ident-m);
    }

    &__icon {
      font-size: 24px;
    }
  }

  .FAQ {
    margin-bottom: 200px;

    &__text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: var(--ident-xxl);
    }
  }

  .contacts {
    margin-bottom: 200px;
    
    &__inner {
      display: flex;
      align-items: center;
      padding: 80px 0px;
    }

    &__map {
      border: 1px solid var(--color-light-gray);
      border-radius: 50px; 
      width: 100%;
    }
  }


</style>