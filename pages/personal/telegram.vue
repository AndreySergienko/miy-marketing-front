<template>
  
  <div class="telegram__title">
    <span class="telegram__title-text">Размещение тг-каналов</span>
    <SharedButton size="l" color="blue" @click="publish" >Опубликовать Тг-канал</SharedButton>
  </div>
  <SharedTgChanel />
</template>
<script setup>
  definePageMeta({
    layout: 'personal'
  })

  const router = useRouter()
  const publish = () => {
    router.push('/personal/location')
  }
</script>
<style scoped lang="scss">
  .telegram__title {
    display: flex;
    justify-content: space-between;
  }
</style>