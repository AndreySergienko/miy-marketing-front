<template>
  <div class="benefit">
    <div class="container">
      <shared-animation>
        <div class="benefit__inner">
          <div class="benefit__text">
            <SharedTitle> Наши преимущества </SharedTitle>
            <SharedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br>
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br>
              consequat.
            </SharedText>
            <SharedText>Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor <br>
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br>
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </SharedText>
          </div>
          <SharedBenefit />
        </div>
      </shared-animation>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .benefit {
    margin-bottom: 200px;

    &__inner {
      padding: 80px 0px;
      display: flex;
      justify-content: space-between;
    }

    &__text {
      width: 80%;
      margin-bottom: var(--ident-xxl);
    }
  }
</style>