
<template>
  <div>
    Главная страница
    <RegistrationForm />
    <NuxtLink to="/auth">Авторизация</NuxtLink>
    <br>
    <NuxtLink to="/personal">Личный кабинет</NuxtLink>
  </div>
</template>
<script setup>
  import RegistrationForm from '../components/Form/RegistrationForm.vue'
</script>