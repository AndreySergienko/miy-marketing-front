<template>
  <div class="container">
    <div v-for="(accordItem, id) in accordList" :key="id" class="accordion__box">
      <div class="accord__title">
        <h3> {{ accordItem.title }}</h3>
        <nuxt-icon @click="accordion(accordItem)" :name="accordItem.isOpen ? 'minus' : 'plus'" filled></nuxt-icon>
      </div>
      <div v-if="accordItem.isOpen" class="accordion__text">
        <p>{{ accordItem.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { accordList } from './Accordion.data.ts';
  

  const accordion = (item) => {
    item.isOpen = !item.isOpen
  }
  

</script>
<style scoped>
  .accord__title{
    display: flex;
  }
</style>

