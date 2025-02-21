<template>
  <div class="benefit" id="benefit">
    <div class="container">
      <shared-animation>
        <div class="benefit__inner">
          <div class="benefit__text">
            <SharedTitle class="benefit__text-title"> Наши преимущества </SharedTitle>
          </div>
          <SharedBenefit />
        </div>
        <div class="benefit__reference">
          <SharedText class="benefit__reference-text">
            *“Налоговый кэшбэк”- программа выплаты суммы налога с Вашей прибыли на платформе по итогам каждого месяца.<br> 
            Поторопитесь! Количество мест ограничено.<br>
            С условиями акции можно ознакомиться <br> по ссылке
          </SharedText>
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

    &__reference {
      display: flex;
      justify-content: center;

      &-text {
        text-align: center;
      }
    }

    &__text {
      width: 80%;
      margin-bottom: var(--indent-4xl);

      display: flex;
      align-items: center;

      @include media.media-breakpoint-down(l) {
        display: initial;
      }

      @include media.media-breakpoint-down(sm) {
        width: 95%;
      }

      &-title {
        color: var(--color-blue);
      }
      &-text {
        font-size: 24px;
        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }
      }
    }
  }

  br:last-child {
    display: none;
    @include media.media-breakpoint-down(sm) {
      display: initial;
    }
  }
</style>
