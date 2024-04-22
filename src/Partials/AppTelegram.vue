<template>
  <div class="tg">
    <div class="container">
      <div class="tg__inner">
        <div class="tg__text">
          <SharedTitle>Telegram-каналы</SharedTitle>
          <SharedText
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SharedText>
        </div>
        <div class="card__list">
          <SharedCard
            v-for="index in 9"
            :key="index"
            price="300 р"
            people="12 000"
            advertising="1/24"
            new-people="376"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
   @use 'assets/styles/media';
  .tg {
    margin-bottom: var(--ident-xxl);

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    &__text {
      width: 50%;
      text-align: center;
      margin-bottom: var(--ident-xxl);

      @include media.media-breakpoint-down(sm) {
        width: 95%;
      }
    }
  }

  .card__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--ident-xm);

    @include media.media-breakpoint-down(xl) {
      gap: var(--ident-s);
    }

    @include media.media-breakpoint-down(l) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media.media-breakpoint-down(md) {
      padding: 0 var(--ident-xxl);
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
