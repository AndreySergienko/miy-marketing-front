
<template>
  <div class="main">
    <Header />
    <NuxtImg class="header__logo" src="../public/Dragon.png" />
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
              people="12 000"
              advertising="1/24"
              new-people="376" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import Header from '../components/Header/Header.vue';
  import Benefit from '../components/Benefit/Benefit.vue';
  import Card from '../components/Card/VCard.vue'
  import VTitle from '../components/Title/VTitle.vue'
  import VText from '../components/Text/VText.vue'
</script>

<style scoped>
  .main {
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 80px 160px;
  }

  .header__logo {
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
  }

  .intro__inner {
    width: 55%;
  }

  .benefit {
    margin-bottom: 200px;
  }

  .benefit__inner {
    display: flex;
    justify-content: space-between;
  }

  .benefit__text {
    width: 70%;
  }

  .tg__text {
    margin-left: 360px;
    width: 50%;
    text-align: center;
    margin-bottom: var(--ident-xxl);
  }

  .card__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  }

</style>