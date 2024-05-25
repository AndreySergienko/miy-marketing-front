<template>
  <div class="shared__burger">
    <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
    <label class="burger" for="burger-checkbox"></label>
    <div class="menu-list">
      <div class="menu-list__inner">
        <ClientOnly>
          <SharedNavigation position="column"/>
        </ClientOnly>
        <div class="btn">
          <SharedButton size="s" color="white" v-if="!isAuth" @click="signin">Войти</SharedButton>
          <SharedButton size="m" color="blue" v-if="!isAuth" @click="signup">Зарегистрироваться</SharedButton>
          <SharedButton size="m" color="blue" v-if="isAuth" @click="logout">Выйти</SharedButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type {IAuthProps} from "~/components/AppHeader/AppHeader.types";

  const props = defineProps<IAuthProps>()

  const router = useRouter()
  const signup = () => {
    router.push('/authentication/registration')
  }
  const signin = () => {
    router.push('/authentication/login')
  }
</script>
<style scoped lang="scss">
  @use 'assets/styles/media';
  .shared__burger {
    display: none;

    @include media.media-breakpoint-down(l) {
      display: block;
    }
  }
  .burger-checkbox {
  position: absolute;
  visibility: hidden;
  }
  .burger {
    position: relative;
    z-index: 1;
    cursor: pointer;
    display: block;
    border: none;
    background: transparent;
    width: 40px;
    height: 26px;
  }
  .burger::before,
  .burger::after {
    content: '';
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background: #000;
  }
  .burger::before {
    top: 0;
    box-shadow: 0 11px 0 #000;
    transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
  }
  .burger::after {
    bottom: 0;
    transition: bottom .3s .15s, transform .3s;
  }
  .burger-checkbox:checked + .burger::before {
    top: 11px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0,0,0,0);
    transition: box-shadow .15s, top .3s, transform .3s .15s;
  }
  .burger-checkbox:checked + .burger::after {
    bottom: 11px;
    transform: rotate(-45deg);
    transition: bottom .3s, transform .3s .15s;
  }
  .menu-list {
    top: 97px;
    left: 0;
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: var(--color-white);
    transition: .3s;
    z-index: 1;

    &__inner {
      background-color: var(--color-white);
      width: 100vw;
    }

    @include media.media-breakpoint-down(sm) {
      padding: var(--indent-m) var(--indent-s);
      top: 76px;
    }
  }
  .burger-checkbox:checked ~ .menu-list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    transform: translateX(0);
    height: 100%;
    width: 100%;

    @include media.media-breakpoint-down(l) {
      justify-content: flex-start;
    }
  }
  .btn {
    display: none;
    margin-bottom: var(--indent-m);

    @include media.media-breakpoint-down(sm) {
      display: flex;
    }
  }
</style>
