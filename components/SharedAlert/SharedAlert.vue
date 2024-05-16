<template>
  <div class="alert">
    <slot />
  </div>
</template>

<style scoped>
.alert {
  background: #e04343;
  padding: 12px;
  color: white;
  font-size: 12px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
}
</style>
