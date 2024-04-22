<template>
  <div class="FAQ">
    <div class="container">
      <shared-animation>
        <div class="FAQ__inner">
          <div class="FAQ__text">
            <SharedTitle>FAQ</SharedTitle>
            <SharedText>Часто задоваемые нам вопросы на которые уже есть ответы</SharedText>
          </div>
          <SharedAccordion />
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use 'assets/styles/media';
  .FAQ {
    margin-bottom: 100px;

    &__text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: var(--ident-xxl);

      @include media.media-breakpoint-down(sm) {
        text-align: center;
        padding: 0 16px;
      }
    }
  }
</style>