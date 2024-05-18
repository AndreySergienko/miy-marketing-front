<template>
  <div class="id-bot">
    <nuxt-icon class="id-bot__icon" name="question" filled />
    <div class="id-bot__inner">
      <div class="id-bot__title">Уникальный id</div>
      <div class="id-bot__text">Вы сможете получить уникальный id через нашего <nuxt-link to="/connect">тг бота</nuxt-link>. Для <br> 
        начала напишите в строке “/start”. Убедительная просьба <br>
        использовать один аккаунт при получении id и при будущем <br>
        осуществлении рекламы. В обязательно порядке при <br>
        размещении рекламы в тг каналах вы должны быть админом.
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .id-bot {
    margin-left: var(--indent-s);
    &__icon:hover + &__inner {
      display: block;
    }

    &__inner {
      position: absolute;
      padding: var(--indent-l);
      display: none;
      background-color: var(--color-white);
      transition: all 0.3s;
      border: 1px solid var(--color-light-gray);
      border-radius: 24px;
    }

    &__title {
      font-size: var(--font-size-s);
      margin-bottom: var(--indent-m);
    }
    &__text {
      font-size: 14px;
    }
  }
</style>