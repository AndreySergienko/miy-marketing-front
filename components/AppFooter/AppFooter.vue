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
              <span class="footer__intro-title__title">ОN-DEVELOPER</span>
              <span class="footer__intro-title__text">© ОN-DEVELOPER 2024</span>
            </div>
            <div class="footer__intro-link">
              <a href="/Politic confidential/personal__data.pdf">Согласие на обработку персональных данных</a>
              <a href="/Politic confidential/public__offer.pdf">Публичная оферта</a>
            </div>
            <div class="footer__intro-contacts">
              <div class="footer__intro-contacts__email">
                <nuxt-icon class="footer__icon" name="email" />
                <span class="footer__icon-text">miy@on-developer.ru</span>
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
      width: 100%;

      @include media.media-breakpoint-down(sm) {
        flex-direction: column;
      }

      &-inner {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include media.media-breakpoint-down(md) {
          flex-direction: column;
          align-items: flex-start;
          gap: var(--indent-l);
        }
      }

      &-title {
        display: flex;
        flex-direction: column;

        &__title {
          font-size: var(--font-size-l);
          font-weight: var(--font-weight-bold);

          @include  media.media-breakpoint-down(sm) {
            font-size: var(--font-size-m);
            font-weight: var(--font-weight-bold);
          }
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

      &-link {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: var(--font-size-m);
        cursor: pointer;

        @include media.media-breakpoint-down(md) {
          text-align: left;
          order: 3;
        }

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }

        & > * {
          color: var(--color-black);
          text-decoration: none;

        }
      }

      &-contacts {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__email, &__web {
          display: flex;
          align-items: center;

          @include media.media-breakpoint-down(sm) {
            justify-content: unset;
          }
        }

        &__email {
          margin-bottom: 2px;
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
</style>
