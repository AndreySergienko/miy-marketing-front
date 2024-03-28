<template>
  <div class="benefit__list">
    <div 
    class="benefit__item" 
    v-for="(benItem, index) in benList" :key="benItem.text"
    >
      <div :class="[`${ index === 0 || index === 2 ? 'white' : 'black'}__text`]">
        <div class="benefit__text">{{ benItem.text }}</div>
        <div class="benefit__number">{{ benItem.number }}</div>
      </div>
      
    </div>
  </div>
</template>


<script setup>
  import {benList} from './Benefit.data';
</script>

<style scoped>
  .white__text, .black__text {
    margin-bottom: 15px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    border-radius: 45px;
  }

  .benefit__text {
    width: 50%;
  }
  .benefit__number {
    font-size: 80px;
  }

  .white__text {
    color: white;
    background: black;
  }

  .black__text {
    color: black;
    background: white;
    border: 1px solid grey;
  }

  .white__text .benefit__text, .black__text .benefit__number {
    order: 0;
    margin-left: 20px;
  }

  .white__text .benefit__number, .black__text .benefit__text {
    order: 1;
    margin-right: 20px;
  }
</style>