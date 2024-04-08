<template>
  <div>
    <div class="header">
      <div class="header__inner">
        <h1 class="header__title">ON DEVELOPER</h1>
        <VNavigation />
        <div class="header__button">
          <VButton className="l" @click="signin">Войти</VButton>
          <VButton className="r" @click="signup">Зарегистрироваться</VButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import VNavigation from '../VNavigation/VNavigation.vue'
  import VButton from '../VButtons/VButton.vue';

  const router = useRouter()
  const signup = () => {
    router.push('/registration')
  }
  const signin = () => {
    router.push('/auth')
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