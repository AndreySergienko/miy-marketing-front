<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link class="header__link" to="/"><h1 class="header__title">ON-DEVELOPER</h1></nuxt-link>
        <ClientOnly>
          <SharedNavigation class="header__navigation" />
        </ClientOnly>
        <div class="header__button">
          <SharedButton v-if="!isAuth" size="s" color="white" @click="signin">Войти</SharedButton>
          <SharedButton v-if="!isAuth" size="m" color="blue" @click="signup">Зарегистрироваться</SharedButton>
          <SharedUserbox v-if="isAuth && user?.fio" :user="user" />
          <SharedButton size="m" color="blue" v-if="isAuth" @click="logout">Выйти</SharedButton>
        </div>
        <SharedBurger :is-auth="isAuth" :logout="logout"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type {IAuthProps} from "~/components/AppHeader/AppHeader.types";
  import { useUserStore } from '~/store/user/user.store';

  const props = defineProps<IAuthProps>()

  const userStore = useUserStore()
  const {user} = storeToRefs(userStore)

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
    position: sticky;
    border-bottom: 1px solid var(--color-light-gray);
    background-color: var(--color-white);
    z-index: 1;
    top: 0;
    padding: var(--indent-xl) 0;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
        font-size: var(--font-size-m);
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
