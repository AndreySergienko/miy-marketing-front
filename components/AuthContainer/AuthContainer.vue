<template>
  <div class="auth">
    <div class="auth__inner">
      <h2 class="auth__title"><slot name="title" /></h2>
      <div class="auth__link"><slot name="link" /></div>
      <div class="auth__form"><slot name="form" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .auth {
    display: flex;
    align-items: center;
    

    &__title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--ident-xm);
      width: 500px;
    }

    &__link {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      margin-bottom: var(--ident-xs);
    }

    &__form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
</style>