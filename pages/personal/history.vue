<template>
  <div class="history">
    <div class="container">
      <div class="history__inner">
        <div class="history__list">
          <SharedCardTg 
            v-for="index in 12" :key="index"
            date="22.09.23"
            price="22.09.23"
            id="22.09.23"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'personal'
  })
</script>
<style scoped lang="scss">
  .history {
    margin-top: 85px;
    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 50px;
    }

    &__inner {
      margin-bottom: 230px;
    }
  }
</style>