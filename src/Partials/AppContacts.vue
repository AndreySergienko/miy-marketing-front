<template>
  <div class="contacts">
    <div class="container">
      <shared-animation>
        <div class="contacts__inner">
          <SharedContacts />
          <iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ac83c30029fc4deea7465f04dbaec8f68c6459c2bdfc053d2e1d31405ed4ec8&amp;source=constructor" width="900" height="500" frameborder="0"></iframe>
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .contacts {
    margin-bottom: 200px;

    &__inner {
      display: flex;
      align-items: center;
      padding: 80px 0px;
    }

    &__map {
      border: 1px solid var(--color-light-gray);
      border-radius: 50px;
      width: 100%;
    }
  }
</style>