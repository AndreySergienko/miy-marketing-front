<template>
  <div class="FAQ" id="faq">
    <div class="container">
      <shared-animation>
        <div class="FAQ__inner">
          <div class="FAQ__text">
            <SharedTitle>FAQ</SharedTitle>
            <SharedText>
              Ответы на часто задаваемые вопросы о нашей платформе. <br> Узнайте, как начать
              размещать рекламу в телеграмм каналах и какие возможности предоставляет наш
              сервис.
            </SharedText>
          </div>
          <SharedAccordion />
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  @use 'assets/styles/mixins';
  .FAQ {
    @include mixins.indent;
    margin-bottom: var(--indent-5xl);

    &__text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: var(--indent-4xl);

      @include media.media-breakpoint-down(sm) {
        text-align: center;
        padding: 0 var(--indent-l);
      }
    }
  }
</style>