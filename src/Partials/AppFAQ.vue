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
  .FAQ {
    margin-bottom: 200px;

    &__text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: var(--ident-xxl);
    }
  }
</style>