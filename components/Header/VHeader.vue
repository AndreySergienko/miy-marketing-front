<template>
  <div>
    <div class="header">
      <div class="header__inner">
        <h1 class="header__title">ON DEVELOPER</h1>
        <slot name="navigation" />
        <div class="header__button">
          <VButton size="s">Логин</VButton>
          <VButton size="s">Регистрация</VButton>
<!--          <VButtonLogIn @click="signin" />-->
<!--          <VButtonRegistration @click="signup"/>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import VButtonLogIn from '../Buttons/Header buttons/VButtonLogIn.vue'
  import VButtonRegistration from '../Buttons/Header buttons/VButtonRegistration.vue'
  import VNavigation from '../Navigation/VNavigation.vue'

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
    }

    &__button {
      display: flex;
    }
  }
</style>