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
        />
        <span
          v-if="statusTooltip"
          class="profile-channels-item__panel-status--tooltip"
        >
          {{ statusTooltip }}
        </span>
      </div>
      <div class="profile-channels-item__panel-controls">
        <NuxtIcon
          class="profile-channels-item__panel-controls--icon"
          name="channels-controls-edit"
          filled
        />
        <NuxtIcon
          v-if="status === EProfileChannelsItemTypes.DONE"
          class="profile-channels-item__panel-controls--icon"
          name="channels-controls-retry"
          filled
        />
        <NuxtIcon
          class="profile-channels-item__panel-controls--icon"
          name="channels-controls-delete"
          filled
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
    font-size: var(--font-size-ml);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__panel {
    display: flex;
    align-items: center;
    gap: var(--ident-4xl);

    &-status {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--ident-l);
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
      color: var(--item-text-color);

      &--icon {
        width: 26px;
        height: 26px;

        :deep(svg) {
          width: 100%;
          height: 100%;
        }
      }

      &--tooltip {
        position: absolute;
        top: -60px;
        left: -90px;
        z-index: 2;
        display: none;
        padding: var(--ident-l);
        border: 1px solid #ffd0d0;
        border-radius: 22px;
        box-shadow: 4px 4px 5px 0px #0000000d;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        background: #fff;
        color: var(--color-black);
        width: 232px;
        box-sizing: border-box;
      }
    }

    &-controls {
      display: flex;
      align-items: center;
      gap: var(--ident-4xl);

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

    .profile-channels-item__panel-status--icon {
      cursor: pointer;

      &:hover + .profile-channels-item__panel-status--tooltip {
        display: flex;
      }
    }
  }
}
</style>
