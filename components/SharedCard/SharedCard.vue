<template>
  <div class="card">
    <div class="card__inner">
      <img class="card__img" src="../../public/tg.png" />
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
            {{ advertising }}
          </div>
          <nuxt-icon class="card__icon-img__advertising" name="advertising"/>
        </div>
        <div class="card__icon">
          <div class="card__icon-text">
            {{ newPeople }}
          </div>
          <nuxt-icon class="card__icon-img__newPeople" name="newPeople"/>
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
    advertising: String,
    newPeople: String,
  })

  // const cardTitle = ref()
  // const cardText = ref()

  // const fetchData = async () => {
  //   const response = await fetch('')
  //   const data = await response.json();
  //   cardTitle.value = data.title;
  //   cardText.value = data.text;
  // }

  // fetchData()

</script>

<style lang="scss" scoped>
  @use 'assets/styles/media';

  .card {
    border-radius: 25px;
    margin-bottom: var(--ident-xs);
    transition: box-shadow 0.3ms;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &__inner {
      padding: var(--ident-xs) var(--ident-xl) 146px;
      gap: var(--ident-mx);

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

      @include media.media-breakpoint-down(sm) {
        font-size: var(--font-size-mx);
      }
    }

    &__icons {
      display: flex;
      gap: var(--ident-xxl);
      @include media.media-breakpoint-down(sm) {
          gap: var( --ident-xm);
        }
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var( --ident-ml);

      &-text {
        font-size: var( --font-size-m);
        font-weight: var(--font-weight-semi-bold);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-sm);
        }
      }

      &-img {
        &__people, &__newPeople {
          font-size: var(--font-size-m);

          @include media.media-breakpoint-down(sm) {
            font-size: var(--font-size-sm);
          }
        }
        &__advertising {
          font-size: var(--font-size-ml);

          @include media.media-breakpoint-down(sm) {
            font-size: var(--font-size-sm);
          }
        }
      }
    }

    &__calendar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      margin-bottom: var(--ident-l);
      gap: var(--ident-ml);

      @include media.media-breakpoint-down (l) {
        width: 20%;
      }
      @include media.media-breakpoint-down (sm) {
        justify-content: center;
      }

      &-text {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-semi-bold);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-sm);
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
      padding: var(--ident-mx) 0;
      gap: var(--ident-ml);

      font-size: var(--font-size-m);

      border: 1px solid transparent;
      border-radius: 10px;
      color: var(--color-white);
      background-color: var(--color-blue);

      @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-sm);
          gap: var(--ident-s);
        }

      &-icon {
        font-size: var(--font-size-ml);

        @include media.media-breakpoint-down(sm) {
          font-size: var(--font-size-s);
        }
      }
    }
  }
</style>