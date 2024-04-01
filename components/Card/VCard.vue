<template>
  <div class="card">
    <div class="card__inner">
      <img class="card__img" src="../../tg.png" />
      <VCardTitle class="card__title"/>
      <VCardText />
      <div class="card__icons">
        <div class="card__icon">
          <div class="card__icon-text">
            {{ people }}
          </div>
          <nuxt-icon name="people"/>
        </div>
        <div class="card__icon">
          <div class="card__icon-text">
            {{ advertising }}
          </div>
          <nuxt-icon name="advertising"/>
        </div>
        <div class="card__icon">
          <div class="card__icon-text">
            {{ newPeople }}
          </div>
          <nuxt-icon name="newPeople"/>
        </div>
      </div>
      <div class="card__calendar">
        <div class="card__calendar-text">
          <p>Календарь</p>
        </div>
        <nuxt-icon class="card__calendar-icon" name="calendar"/>
      </div>
      <button class="card__button">
        <p class="card__button-text">{{ buttonText }}</p>
        <nuxt-icon class="card__button-icon" name="chevron" />
      </button>
    </div>
  </div>
</template>

<script setup>

  import VCardTitle from './VCardTitle.vue';
  import VCardText from './VCardText.vue'

  const props = defineProps({
    people: String,
    advertising: String,
    newPeople: String,
    buttonText: String,
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

<style lang="scss" lscoped>
  .card {
    margin-bottom: var(--ident-xs);

    &__inner {
      padding: var(--ident-xs) var(--ident-xxl) 146px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border: 1px solid var(--color-light-gray);
      border-radius: 25px;
    }

    &__title {
      width: 63%;
    }

    &__icons {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin-bottom: var(--ident-l);
    }

    &__icon {
      display: flex;
      align-items: center;

      &-text {
        font-size: var( --font-size-m);
        font-weight: var(--font-weight-semi-bold);
        margin-right: var(--ident-s);
      }
    }

    &__calendar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      margin-bottom: var(--ident-xs);

      &-text {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-semi-bold);
        margin-right: var(--ident-s);
      }

      &-icon {
        font-size: 24px;
      }
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 12px 0px;
      border-radius: 10px;
      border-color: var(--color-blue);
      color: var(--color-white);
      background-color: var(--color-blue);

      &-text {
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-semi-bold);
      }

      &-icon {
        font-size: 24px;
      }
    }
  }
</style>