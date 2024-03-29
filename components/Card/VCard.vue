<template>
  <div class="card">
    <div class="card__inner">
      <img src="../../tg.png" />
      <VCardTitle><span style="color: var(--color-blue)">Еaque</span> ipsa <br> 300 р </VCardTitle>
      <VCardText>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </VCardText>
      <div class="card__icons">
        <div class="card__icons-people">
          {{ people }}
          <nuxt-icon name="people" />
        </div>
        <div class="card__icons-advertising">
          {{ advertising }}
          <nuxt-icon name="advertising"/>
        </div>
        <div class="card__icons-new__people">
          {{ newPeople }}
          <nuxt-icon name="newPeople"/>
        </div>
      </div>
      <div class="card__calendar">
        <p class="card__calendar-text">Календарь</p>
        <nuxt-icon name="calendar"/>
      </div>
      <button class="card__button">{{ buttonText }}</button>
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
</script>

<style scoped>
  .card {
    width: 80%;
    margin-bottom: var(--ident-xs);
  }
  .card__inner {
    padding: 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(169, 169, 169, 0.5);
    border-radius: 25px;
  }

  img {
    width: 70%;
  }

  .card__icons {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: var(--ident-l);
  }

  .card__calendar {
    display: flex;
    justify-content: space-between;
    width: 35%;
    margin-bottom: var(--ident-xs);
  }

  .card__calendar-text {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-semi-bold);
  }

  .card__button {
    width: 100%;
    padding: 12px 0px;
    border-radius: 10px;
    color: var(--color-white);
    background-color: var(--color-blue);

  }
</style>