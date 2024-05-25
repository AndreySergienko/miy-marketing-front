<template>
  <div class="card">
    <div class="card__inner">
      <img class="card__img" src="../../public/tg.png" alt="тг" />
      <SharedCardTitle class="card__title"/>
      <div class="card__price">{{ price }}</div>
      <SharedCardText />
      <div class="card__icons">
        <div class="card__icon">
          <div class="card__icon-text">
            {{ people }}
          </div>
          <nuxt-icon class="card__icon-img__people" name="people"/>
        </div>
        <div class="card__icon">
          <div class="card__icon-text">
            {{ clock}}
          </div>
          <nuxt-icon class="card__icon-img__clock" name="clock"/>
        </div>
      </div>
      <div class="card__calendar">
        <div class="card__calendar-text">
          <p>Календарь</p>
          </div>
          <nuxt-icon class="card__calendar-icon" name="calendar"/>
          </div>
      <button class="card__button">
        Купить
        <nuxt-icon class="card__button-icon" name="chevron" filled />
      </button>
    </div>
  </div>
</template>

<script setup>

  import SharedCardTitle from './SharedCardTitle.vue';
  import SharedCardText from './SharedCardText.vue'

  const props = defineProps({
    price: String,
    people: String,
    clock: String,
  })

</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';

  .card {
    border-radius: 25px;
    margin-bottom: var(--indent-3xl);
    transition: box-shadow 0.3ms;
    width: 20vw;

    @include media.media-breakpoint-down (xl) {
      width: 26vw;
    }

    @include media.media-breakpoint-down (l) {
      width: 30vw;
    }

    @include media.media-breakpoint-down (md) {
      width: 45vw;
    }

    @include media.media-breakpoint-down (sm) {
      width: 100%;
    }

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &__img {
      width: 200px;
    }

    &__inner {
      padding: var(--indent-3xl) var(--indent-3xl);
      gap: var(--indent-m);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border: 1px solid var(--color-light-gray);
      border-radius: 25px;
    }

    &__price {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);

      @include media.media-breakpoint-down (l) {
      font-size: var(--font-size-l);
    }

      @include media.media-breakpoint-down(sm) {
        font-size: 30px;
      }
    }

    &__icons {
      display: flex;
      gap: var(--indent-4xl);
      @include media.media-breakpoint-down(sm) {
          gap: var( --indent-2xl);
        }
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var( --indent-m);

      &-text {
        font-size: var( --font-size-m);
        font-weight: var(--font-weight-semi-bold);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }
      }

      &-img {
        &__people, &__clock {
          font-size: var(--font-size-m);

          @include media.media-breakpoint-down(sm) {
            font-size: var(--font-size-s);
          }
        }
      }
    }

    &__calendar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      margin-bottom: var(--indent-l);
      gap: var(--indent-m);

      @include media.media-breakpoint-down(xl) {
        justify-content: center;
      }

      @include media.media-breakpoint-down(l) {
        justify-content: center;
      }

      @include media.media-breakpoint-down(sm) {

      }

      &-text {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-semi-bold);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }
      }

      &-icon {
        font-size: var(--font-size-l);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-m);
        }
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: var(--indent-m) 0;
      gap: var(--indent-m);

      font-size: var(--font-size-m);

      border: 1px solid transparent;
      border-radius: 10px;
      color: var(--color-white);
      background-color: var(--color-blue);

      @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
          gap: var(--indent-s);
        }

      &-icon {
        font-size: var(--font-size-m);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }
      }
    }
  }
</style>
