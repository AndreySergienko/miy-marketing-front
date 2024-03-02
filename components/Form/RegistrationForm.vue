<template>
  <div class="registration">
    <input 
      type="number"
      name="inn"
      placeholder="ИНН"
      id="inn"
      required
      minlength="12"
      maxlength="13"
      v-model="form.inn">

    <input 
      type="email"
      name="email"
      placeholder="E-mail"
      v-model="form.email">

    <input 
      type="text"
      name="idBot"
      placeholder="Id аккаунта"
      v-model="form.idBot">

    <input 
      type="text"
      name="name"
      placeholder="ФИО"
      v-model="form.name">
      
    <input 
      type="password"
      name="password"
      placeholder="Пароль"
      v-model="form.password">

    <button class="btn" @click="registration">Зарегистрироваться</button>
  </div>
</template>

<script setup>
import {reactive} from 'vue';
import {useRouter} from 'vue-router';

const form = reactive({
  inn: '',
  email:'',
  idBot:'',
  name: '',
  password:'',
})

const router = useRouter()

const registration = async () => {
  try{
    const response = await fetch('/api/registration')
    const data = await response.json();
    router.push('/auth')
  } catch (error) {
    consol.log(error);
  } 
}
</script>

<style scooped>
.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin-bottom: 10px;
}
</style>