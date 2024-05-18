<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <SharedNavigation />
        </div>
        <div class="footer__intro">
          <div class="footer__intro-inner">
            <div class="footer__intro-title">
              <span>ОN-DEVELOPER</span>
            </div>
            <div class="footer__intro-text">
              <p>Разработка сайта <span class="studio">Я</span>Р студия</p>
              <p>© ОN-DEVELOPERс 2021-2024</p>
            </div>
          </div>
          <div class="footer__intro-contacts">
            <div class="footer__intro-contacts__email">
              <nuxt-icon class="footer__icon" name="email" />
              <span class="footer__icon-text">ON-Developer@gmail.com</span>
            </div>
            <div class="footer__intro-contacts__web">
              <nuxt-icon class="footer__icon" name="tg" />
              <span class="footer__icon-text">https://t.me/ON-Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use 'assets/styles/media';
  .footer {
    border-top: 1px solid var(--color-light-gray);
    padding: 0 var(--indent-l);

    @include media.media-breakpoint-down(sm) {
        padding: 0;
      }

    &__inner {
      padding: var(--indent-3xl) 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @include media.media-breakpoint-down(sm) {
        padding: 0 0 0 var(--indent-s);
        margin-top: var(--indent-l);

      }
      @include media.media-breakpoint-down(sm) {
        align-items: flex-start;
      }
    }

    &__nav {
      margin-bottom: var(--indent-3xl);

      @include media.media-breakpoint-down(sm) {
        display: flex;
        justify-content: flex-start;
        margin-bottom: var(--indent-2xl);
      }
    }

    &__intro {
      display: flex;
      justify-content: space-between;
      width: 100%;

      @include media.media-breakpoint-down(sm) {
        flex-direction: column;
      }

      &-inner {
        display: flex;
        flex-direction: column;
        gap: var(--indent-m);

        @include media.media-breakpoint-down(sm) {
          order:2;
        }
      }

      &-title {
        font-size: var(--font-size-l);
        font-weight: var(--font-weight-bold);

        @include  media.media-breakpoint-down(sm) {
          font-size: var(--font-size-m);
          font-weight: var(--font-weight-bold);
        }
      }

      &-text {
        display: flex;
        flex-direction: column;
        gap: var(--indent-m);
        font-size: var(--font-size-s);
        font-weight: var(--font-weight-medium);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
          font-weight: var(--font-weight-medium);
        }
      }

      &-contacts {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__email, &__web {
          display: flex;
          justify-content: space-between;
          align-items: center;

          @include media.media-breakpoint-down(sm) {
            justify-content: unset;
          }
        }

        &__email {
          margin-bottom: 2px;
        }

        &__web {
          @include media.media-breakpoint-down(sm) {
            margin-bottom: var(--indent-2xl);
          }
        }
      }
    }

    &__icon {
      font-size: var(--font-size-m);
      margin-right: var(--indent-m);

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-m);
      }
    }

    &__icon-text {
      font-size: var(--font-size-m);
      font-weight: var(-font-weight-medium);
      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-s)
      }

    }
  }
  .studio {
    color: red;
  }

</style>
