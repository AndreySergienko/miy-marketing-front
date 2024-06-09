<template>
  <div class="benefit" id="benefit">
    <div class="container">
      <shared-animation>
        <div class="benefit__inner">
          <div class="benefit__text">
            <SharedTitle> Наши преимущества </SharedTitle>
            <SharedText>
              Оплата и создание рекламы через нашего бота
            </SharedText>
            <SharedText>
              Возможность размещения рекламы в сотнях и тысячах каналов
            </SharedText>
          </div>
          <SharedBenefit />
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  @use 'assets/styles/mixins';
  .benefit {
    @include mixins.indent;
    margin-bottom: var(--indent-5xl);

    @include media.media-breakpoint-down(xl) {
      margin-bottom: 0;
    }

    @include media.media-breakpoint-down(l) {
      margin-bottom: var(--indent-5xl);
    }

    @include media.media-breakpoint-down (sm) {
      margin-bottom: 0;
    }


    &__inner {
      padding: var(--indent-4xl) 0;
      display: flex;
      justify-content: space-between;

      @include media.media-breakpoint-down(l) {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }

    &__text {
      width: 80%;
      margin-bottom: var(--indent-4xl);

      @include media.media-breakpoint-down(sm) {
        width: 95%;
      }
    }
  }
</style>
