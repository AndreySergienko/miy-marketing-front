<template>
  <section class="profile-work-type">
    <h2 class="profile-work-type__title">Ваш статус</h2>
    <div class="profile-work-type__content">
      <h3 class="profile-work-type__content-title">
        Индивидуальный предприниматель
      </h3>
      <p :class="['profile-work-type__content-status', status.className]">
        {{ status.text }}
      </p>
    </div>
    <p class="profile-work-type__action" @click="handleClick">Изменить</p>
  </section>
</template>

<script setup lang="ts">
const status = computed(() => ({
  text: "Подтвержден",
  className: "accept",
}));

const isOpenedPopup = useState("is-opened-work-type-popup", () => false);

const handleClick = () => {
  isOpenedPopup.value = true;
};
</script>

<style scoped lang="scss" src="./ProfileWorkType.scss"></style>
