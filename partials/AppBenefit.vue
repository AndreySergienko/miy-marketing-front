<template>
  <div class="benefit" id="benefit">
    <div class="container">
      <shared-animation>
        <div class="benefit__inner">
          <div class="benefit__text">
            <SharedTitle> Наши преимущества </SharedTitle>
            <SharedText
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, <br />
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo <br />
              consequat.
            </SharedText>
            <SharedText
              >Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis <br />
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
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
