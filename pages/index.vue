
<template>
  <div class="main">
    <VHeader />
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
    <div calss="tg">
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
              
              button-text= "Купить"
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
      <nuxt-icon class="more__icon" name="arrow" />
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
          <NuxtImg class="contacts__map" src="../public/Map.png" />
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
    transform: rotate(-16deg);
  }

  .intro {
    margin-bottom: 265px;

    &__inner {
      width: 55%;
    }
  }

  .benefit {
    margin-bottom: 200px;

    &__inner {
      display: flex;
      justify-content: space-between;
    }

    &__text {
      width: 80%;
    }
  }

  .tg {
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;

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
    }
  }

  .contacts {
    &__inner {
      display: flex;
      margin-bottom: 200px;
    }

    &__map {
      width: 100%;
      height: 100%;
      
    }
  }

</style>