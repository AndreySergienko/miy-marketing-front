<template>
  <div
    :class="['default-tooltip', rootClasses]"
    @mousemove="openShow"
    @mouseleave="closeShow"
  >
    <NuxtIcon class="default-tooltip__title" name="auth-help" filled />
    <div class="default-tooltip__inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const isShow = ref(false);

const rootClasses = computed(() => ({
  "default-tooltip--shown": isShow.value,
}));

const openShow = () => {
  if (isShow.value) return;

  window.addEventListener("click", closeShow);
  isShow.value = true;
};

const closeShow = () => {
  window.removeEventListener("click", closeShow);
  isShow.value = false;
};
</script>

<style scoped lang="scss" src="./DefaultTooltip.scss"></style>
