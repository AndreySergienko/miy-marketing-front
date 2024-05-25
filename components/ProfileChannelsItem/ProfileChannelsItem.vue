<template>
  <div :class="['profile-channels-item', rootClass]">
    <span class="profile-channels-item__title">{{ title }}</span>
    <div class="profile-channels-item__panel">
      <div class="profile-channels-item__panel-status">
        <span>{{ statusText }}</span>
        <NuxtIcon
          class="profile-channels-item__panel-status--icon"
          :name="`channels-item-${status}`"
          filled
          @pointerover="isTooltipActive = true"
          @pointerleave="isTooltipActive = false"
        />
        <SharedTooltip
          v-if="statusTooltip"
          :is-active="isTooltipActive"
          class="profile-channels-item__panel-status--tooltip"
          :text="statusTooltip"
          border-color="#ffd0d0"
        />
      </div>
      <div class="profile-channels-item__panel-controls">
        <NuxtIcon
          v-if="status !== EProfileChannelsItemTypes.MODERATING"
          class="profile-channels-item__panel-controls--icon"
          name="channels-controls-edit"
          filled
          @click="$emit('edit')"
        />
        <NuxtIcon
          v-if="status === EProfileChannelsItemTypes.DONE"
          class="profile-channels-item__panel-controls--icon"
          name="channels-controls-retry"
          filled
          @click="$emit('retry')"
        />
        <NuxtIcon
          class="profile-channels-item__panel-controls--icon"
          name="channels-controls-delete"
          filled
          @click="$emit('delete')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  EProfileChannelsItemTypes,
  type IProfileChannelsItemEmits,
  type IProfileChannelsItemProps,
} from "./ProfileChannelsItem.types";

const props = defineProps<IProfileChannelsItemProps>();
const { status } = toRefs(props);

defineEmits<IProfileChannelsItemEmits>();

const statuses = {
  [EProfileChannelsItemTypes.DONE]: "Выполнено",
  [EProfileChannelsItemTypes.AVAILABLE]: "Доступно",
  [EProfileChannelsItemTypes.MODERATING]: "На проверке",
  [EProfileChannelsItemTypes.REJECTED]: "Отклонено",
};

const rootClass = computed(() => `profile-channels-item--${status.value}`);
const statusText = computed(() => statuses[status.value]);

const isTooltipActive = ref(false);
</script>

<style scoped lang="scss">
.profile-channels-item {
  --item-color: transparent;
  --item-text-color: var(--color-black);

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  border-bottom: 1px solid var(--item-color);

  &__title {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__panel {
    display: flex;
    align-items: center;
    gap: var(--indent-4xl);

    &-status {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--indent-l);
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      color: var(--item-text-color);

      &--icon {
        width: 26px;
        height: 26px;
        cursor: pointer;

        :deep(svg) {
          width: 100%;
          height: 100%;
        }
      }

      &--tooltip {
        top: -60px;
        left: -90px;
        padding: var(--indent-l);
        width: 232px;
      }
    }

    &-controls {
      display: flex;
      align-items: center;
      gap: var(--indent-4xl);

      &--icon {
        cursor: pointer;
        width: 40px;
        height: 40px;

        :deep(svg) {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  &--available {
    --item-color: var(--color-blue);
    --item-text-color: var(--color-blue);
  }

  &--moderating {
    --item-color: var(--color-light-gray);
    --item-text-color: var(--color-dark-gray);
  }

  &--done {
    --item-color: #1fc430;
    --item-text-color: #00bc13;
  }

  &--rejected {
    --item-color: #ff5858;
    --item-text-color: #ff0000;
  }
}
</style>
