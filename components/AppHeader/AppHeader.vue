<template>
  <div class="header">
    <div class="header__inner">
      <h1 class="header__title">ON DEVELOPER</h1>
      <SharedNavigation />
      <div class="header__button">
        <SharedButton color="white" @click="signin">Войти</SharedButton>
        <SharedButton color="blue" @click="signup">Зарегистрироваться</SharedButton>
      </div>
    </div>
  </div>
</template>
<script setup>
  import SharedNavigation from '../SharedNavigation/SharedNavigation.vue'
  import SharedButton from '../SharedButtons/SharedButton.vue';

  const router = useRouter()
  const signup = () => {
    router.push('/authentication/registration')
  }
  const signin = () => {
    router.push('/authentication/login')
  }
</script>

<style lang="scss" scoped>
  
  .header {
    margin-bottom: var(--ident-xs);

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: var(--ident-xs) 0px;
    }

    &__title {
      font-size: var( --font-size-l);
      font-weight: var(--font-weight-bold);
      text-decoration: none;
    }

    &__button {
      display: flex;
    }
  }
  nuxt-link {
    text-decoration: none;
  }
</style>