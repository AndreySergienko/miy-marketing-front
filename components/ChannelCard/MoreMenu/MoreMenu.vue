<template>
  <div :class="['more-menu', rootClasses]">
    <span class="more-menu__item" @click="$emit('edit')">Редактировать</span>
    <span
      class="more-menu__item more-menu__item--remove"
      @click="$emit('delete')"
    >
      Удалить
    </span>
  </div>
</template>

<script setup lang="ts">
import type { IMoreMenuProps, IMoreMenuEmits } from "./MoreMenu.types";

const props = defineProps<IMoreMenuProps>();
const { isActive } = toRefs(props);

defineEmits<IMoreMenuEmits>();

const rootClasses = computed(() => ({
  "more-menu--active": isActive.value,
}));
</script>

<style scoped lang="scss" src="./MoreMenu.scss"></style>
