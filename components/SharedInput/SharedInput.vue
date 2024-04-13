<template>
  <div class="input">
    <span class="input__name"><slot /></span>
    <input class="input__form" type="text">
  </div>
</template>

<style scoped lang="scss">
  .input {
    display: flex;
    flex-direction: column;

    &__name {
      margin-bottom: var(--ident-m);

      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
    }

    &__form {
      height: 50px;
      border: 1px solid var(--color-light-gray);
      border-radius: 12px;
    }
  }
</style>