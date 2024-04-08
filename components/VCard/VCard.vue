<template>
  <div class="card">
    <div class="card__inner">
      <img class="card__img" src="../../public/tg.png" />
      <VCardTitle class="card__title"/>
      <div class="card__price">{{ price }}</div>
      <VCardText />
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

  import VCardTitle from './VCardTitle.vue';
  import VCardText from './VCardText.vue'

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
  .card {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    border-radius: 25px;
    margin-bottom: var(--ident-xs);

    &__inner {
      padding: var(--ident-xs) var(--ident-xxl) 146px;
      gap: 13px;

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
    }

    &__icons {
      display: flex;
      gap: 60px;
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      // padding: 8px 24px;
      gap: 10px;

      &-text {
        font-size: var( --font-size-m);
        font-weight: var(--font-weight-semi-bold);
      }

      &-img {
        &__people, &__newPeople {
          font-size: 21px;
        }
        &__advertising {
          font-size: 24px;
        }
      }
    }

    &__calendar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      margin-bottom: 16px;
      gap: 10px;

      &-text {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-semi-bold);
      }

      &-icon {
        font-size: 34px;
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      padding: 12px 0px;
      gap: 10px;

      font-size: var(--font-size-m);

      border: 1px solid transparent;
      border-radius: 10px;
      color: var(--color-white);
      background-color: var(--color-blue);

      &-icon {
        font-size: 24px;
      }
    }
  }
</style>