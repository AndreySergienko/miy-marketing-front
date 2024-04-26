<template>
  <ProfileContainer>
    <template #form>
      <div class="location">
        <div class="container">
          <div class="location__title">
            <span>Размещение TG-каналов</span>
          </div>
          <div class="location__inner">
            <SharedInput>Название</SharedInput>
            <SharedInput>Выбор категории</SharedInput>
            <div class="location__calendar">
              <span class="location__calendar-title">Заполните календарь доступных рекламных слотов в вашем TG-канале</span>
              <SharedInput>День</SharedInput>
              <SharedInput>Слоты</SharedInput>
              <div class="location__calendar-item">
                <SharedInput>Интервал</SharedInput>
                <SharedInput>Цена</SharedInput>
              </div>
            </div>
            <SharedInput class="location__input-link">Ссылка на канал тг</SharedInput>
            <div class="location__btn">
              <SharedButton class="location__btn" color="gray" size="ml">Отправить</SharedButton>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ProfileContainer>
</template>
<script setup>
  definePageMeta({
    layout: 'personal'
  })
</script>

<style scoped lang="scss">
  @use 'assets/styles/media';

  .location {
    margin-top: var(--ident-xxxl);

    &__inner {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 33%;

      @include media.media-breakpoint-down(xl) {
        width: 40vw;
      }

      @include media.media-breakpoint-down(md) {
        width: 60vw;
      }

      @include media.media-breakpoint-down(sm) {
        width: 92vw;
      }
    }

    &__title {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semi-bold);
      margin-bottom: var(--ident-adaptive-xm);
    }

    &__calendar {
      display: flex;
      flex-direction: column;
      gap: 24px;
      border: 1px solid var(--color-light-gray);
      border-radius: 13px;
      padding: var(--ident-l);

      &-title {
        font-size: var(--font-size-ml);
        font-weight: var(--font-weight-semi-bold);
      }

      &-item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;

        @include media.media-breakpoint-down(sm) {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &__input-link {
      font-weight: var(--font-weight-semi-bold);
    }

    &__btn {
      margin-bottom: var(--ident-l);
    }
  }
</style>