<template>
  <div class="intro">
    <div class="container">
      <shared-animation>
        <div class="intro__inner">
          <h1 class="intro__title">
            Добро пожаловать <br> на платформу <br> для продвижения <br> TG-каналов!
          </h1>
          <SharedText>
            Мы предлагаем уникальный бот, который позволяет делегировать ответственность за размещение и 
            управление рекламой в вашем канале. Эффективное продвижение - это просто!
          </SharedText>
        </div>
      </shared-animation>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @use 'assets/styles/media';
  .intro {
    margin-bottom: var(--indent-5xl);

    @include media.media-breakpoint-down (sm) {
      margin-bottom: 0;
    }

    &__inner {
      padding: var(--indent-4xl) 0;
      width: 55%;

      @include media.media-breakpoint-down(md) {
        text-align: center;
        padding: 0;
        width: 100%;
      }

      @include media.media-breakpoint-down(sm) {
        padding: 0;
        width: 100%;
      }
    }

    &__title {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-semi-bold);
      text-align: center;
      margin-bottom: var(--indent-3xl);

      @include media.media-breakpoint-down(xl) {
        font-size: var(--font-size-2xl);
        font-weight: var(--font-weight-semi-bold);
      }

      @include media.media-breakpoint-down(l) {
        font-size: var(--font-size-xl);
      }

      @include media.media-breakpoint-down(sm) {
        font-size: 30px;
        font-weight: var(--font-weight-bold)
      }
    }
  }
</style>
