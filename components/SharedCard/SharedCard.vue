<template>
  <div class="card">
    <div class="card__inner">
      <img class="card__img" :src="avatar" alt="Аватар" />
      <slot name="title" />
<!--      <div class="card__price">{{ formattedPrice }}</div>-->
      <slot name="description" />
      <div class="card__icons">
        <div class="card__icon">
          <div class="card__icon-text">
            {{ subscribers}}
          </div>
          <nuxt-icon class="card__icon-img__people" name="people"/>
        </div>
<!--        <div class="card__icon">-->
<!--          <div class="card__icon-text">-->
<!--            {{ interval}}-->
<!--          </div>-->
<!--          <nuxt-icon class="card__icon-img__people" name="clock"/>-->
<!--        </div>-->
      </div>
      <div class="card__calendar">
        <div class="card__calendar-text">
          <p>Календарь</p>
          </div>
          <nuxt-icon class="card__calendar-icon" name="calendar"/>
          </div>
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type {ISharedCardProps} from "~/components/SharedCard/SharedCard.types";

  const props = defineProps<ISharedCardProps>()

  const avatar = computed<string>(() => {
    if (props.avatar) return props.avatar;
    return '/tg.png'
  })

  const hasActiveDates = computed(() => {
    return props.channelDates && props.channelDates.length > 0;
  });

//   const formattedPrice = computed(() => {
//   return new Intl.NumberFormat('ru-RU', {
//     style: 'currency',
//     currency: props.currency,
//   }).format(props.price);
// });

</script>

<style lang="scss">
  @use 'assets/styles/media';

  .card {
    margin-bottom: var(--indent-3xl);
    transition: box-shadow 0.3ms;
    width: 20vw;

    border: 1px solid var(--color-light-gray);
    border-radius: 25px;

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

    &--disabled {
    background-color: gray;
    opacity: 0.6;
    pointer-events: none;
    box-shadow: none;

    .card__calendar,
    .card__icons {
      display: none;
    }
  }

    &__img {
      width: 200px;
      border-radius: 25px;
    }

    &__inner {
      padding: var(--indent-3xl) var(--indent-3xl);
      gap: var(--indent-m);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &__price {
      font-size: var(--font-size-l);
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
  }
</style>
