<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link class="header__link" to="/"><h1 class="header__title">ON-DEVELOPER</h1></nuxt-link>
        <SharedNavigation class="header__navigation" />
        <div class="header__button">
          <SharedButton size="s" color="white" @click="signin">Войти</SharedButton>
          <SharedButton size="m" color="blue" @click="signup">Зарегистрироваться</SharedButton>
        </div>
        <SharedBurger/>
      </div>
    </div>
  </div>
</template>
<script setup>
  const router = useRouter()
  const signup = () => {
    router.push('/authentication/registration')
  }
  const signin = () => {
    router.push('/authentication/login')
  }
</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .header {

    margin-bottom: var(--ident-xs);

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: var(--ident-xs) 0px;
    }

    &__link {
      text-decoration: none;
      color: var(--color-black);
    }

    &__navigation {
      @include media.media-breakpoint-down(l) {
      display: none;
      }
    }

    &__title {
      font-size: var( --font-size-l);
      font-weight: var(--font-weight-bold);
      text-decoration: none;

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-ml);
        font-weight: var(--font-weight-boldest);
      }
    }

    &__button {
      display: flex;

      @include media.media-breakpoint-down(sm) {
        display: none;
      }
    }
  }
  nuxt-link {
    text-decoration: none;
  }
  
</style>
