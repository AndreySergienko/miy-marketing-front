<template>
  <Teleport to="#teleports">
    <section v-if="isOpened" class="profile-work-type-popup">
      <NuxtIcon
        class="profile-work-type-popup__close"
        name="popup-close"
        filled
        @click="isOpened = false"
      />
      <div class="profile-work-type-popup__text">
        <h2 class="profile-work-type-popup__text-title">Ваш статус</h2>
        <p :class="['profile-work-type-popup__text-status', status.className]">
          {{ status.text }}
        </p>
      </div>
      <ProfileWorkTypeContent />
      <DefaultButton class="profile-work-type-popup__button">
        Сохранить
      </DefaultButton>
    </section>
  </Teleport>
</template>

<script setup lang="ts">
const status = computed(() => ({
  text: "Подтвержден",
  className: "accept",
}));

const isOpened = useState("is-opened-work-type-popup", () => false);
</script>

<style scoped lang="scss" src="./ProfileWorkTypePopup.scss"></style>
