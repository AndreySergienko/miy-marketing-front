<template>
  <div class="alert-container">
    <TransitionGroup name="fade">
      <SharedAlert
        v-for="alert in alertList"
        :key="alert.title + alert.id"
        :delay="delayAnimation"
        v-bind="alert"
        @close="store.close(alert.id)"
      >{{ alert.title }}</SharedAlert>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAlertStore } from '~/store/alert/alert.store';
import SharedAlert from "~/components/SharedAlert/SharedAlert.vue";

const store = useAlertStore();
const { alertList, delayAnimation } = storeToRefs(store);
</script>

<style scoped lang="scss" src="./AlertController.scss"></style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
