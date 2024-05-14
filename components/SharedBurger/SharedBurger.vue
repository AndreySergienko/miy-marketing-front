<template>
  <div class="shared__burger">
    <input type="checkbox" id="burger-checkbox" class="burger-checkbox">
    <label class="burger" for="burger-checkbox"></label>
    <div class="menu-list" :class="{active: isOpen}">
      <div class="menu-list__inner">
        <SharedNavigation position="column" @closeBurger="closeBurger" />
        <div class="btn">
          <SharedButton size="s" color="white" @click="signin">Войти</SharedButton>
          <SharedButton size="m" color="blue" @click="signup">Зарегистрироваться</SharedButton>
        </div>
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

  const isOpen = ref(false);

  const closeBurger = (value) => {
    isOpen.value = value
    console.log(isOpen.value)
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
    position: relative;
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

    &.active

    &__inner {
      background-color: var(--color-white);
      width: 100vw;
    }

    @include media.media-breakpoint-down(sm) {
      top: 81px;
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
    margin-bottom: var(--ident-m);

    @include media.media-breakpoint-down(sm) {
      display: flex;
    }
  }
</style>