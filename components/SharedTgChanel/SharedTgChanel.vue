<template>
  <div class="chanel__list">
    <div class="chanel__item"
      v-for="(chanelItem, index, id) in chanelList" :key="id"
    >
      <div class="chanel__title">
        <div>{{ chanelItem.title }}</div>
      </div>
      <div class="chanel__icon">
        <div class="chanel__state">
          <div>{{ chanelItem.state }}</div>
        </div>
        <nuxt-icon name="pen" filled/>
        <nuxt-icon name="frash" filled/>
        <nuxt-icon name="delet" filled/>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { chanelList } from './SharedTgChanel.data';
</script>
<style scoped lang="scss">
  .chanel {
    &__item {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &__icon {
      width: 25%;
      display: flex;
      justify-content: space-around;
    }
  }
</style>