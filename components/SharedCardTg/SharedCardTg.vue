<template>
  <div class="card">
    <div class="card__inner">
      <div class="card__title">
        <img alt="card" class="card__img" src="~/public/tgcard.png"/>
        <SharedCardTgTitle />
      </div>
      <div class="card__text">
        <div class="card__item">
          <span class="card__item-text">Дата</span>
          <div class="card__item-number">
            {{ date }}
          </div>
        </div>
        <div class="card__item">
          <span class="card__item-text">Стоимость</span>
          <div class="card__item-number">
            {{ price }}
          </div>
        </div>
        <div class="card__item">
          <span class="card__item-text">ID</span>
          <div class="card__item-number">
            {{ id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    date: String,
    price: String,
    id: String,
  })
</script>

<style lang="scss" scoped>
  .card {
    max-width: 500px;
    border: 1px solid var(--color-light-gray);
    border-radius: 36px;
    &__inner {
      display: flex;
      flex-direction: column;
      padding: var(--indent-2xl);
    }

    &__img {
      margin-right: var(--indent-3xl);
    }

    &__title {
      display: flex;
      align-items: center;
      width: 10%;
      margin-bottom: var(--indent-3xl);
    }

    &__text {
      display: flex;
      justify-content: space-between;
    }
    &__item {
      display: flex;
      flex-direction: column;
      gap: var(--indent-s);

      &-text, &-number {
        font-weight: var(--font-weight-medium);
      }

      &-text {
        font-size: var(--font-size-m);
      }

      &-number {
        font-size: var(--font-size-s);
        color: var(--color-dark-gray);
      }
    }
  }
</style>
