<template>
  <div
    :class="['shared-calendar', rootClass]"
    v-outside-click="() => (isOpened = false)"
  >
    <span class="shared-calendar__title">{{ title }}</span>
    <div class="shared-calendar__field" @click="isOpened = !isOpened">
      <div class="shared-calendar__field-selected">{{ selectedText }}</div>
      <NuxtIcon
        class="shared-calendar__field-arrow"
        name="select-arrow"
        filled
      />
    </div>
    <div class="shared-calendar__options">
      <SharedCalendarTopMenu
        :title="topMenuTitle"
        :is-prev-disabled="blockPrev"
        :is-next-disabled="blockNext"
        @prev="handleArrows(-1)"
        @next="handleArrows(1)"
      />
      <div class="shared-calendar__options-table">
        <div
          v-for="day in tableDays"
          :key="day"
          :class="['shared-calendar__options-table--item', tableItemClass(day)]"
          @click="handleDayClick(day)"
        >
          {{ day }}
        </div>
        <div
          v-for="day in 35 - tableDays"
          :key="day"
          :class="[
            'shared-calendar__options-table--item',
            tableItemNextClass(day),
          ]"
          @click="handleDayClick(day, true)"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type {
    ISharedCalendarProps,
    ISharedCalendarEmits,
  } from "./SharedCalendar.types";

  const props = defineProps<ISharedCalendarProps>();
  const { selected } = toRefs(props);

  const emit = defineEmits<ISharedCalendarEmits>();

  const isOpened = ref(false);
  const currentDate = ref<Date>(new Date());
  const now = new Date();

  const selectedText = computed<string>(() => {
    let string = ''
    if (Array.isArray(selected.value)) {
        selected.value.forEach(el => {
            const transformedDay = new Date(el).toLocaleDateString("ru") || ""
            if (string) {
                string += `, ${transformedDay}`
            } else {
                string += transformedDay
            }
        });
    }
    return string
});

  const topMenuTitle = computed(() => {
    const month = currentDate.value.toLocaleDateString("ru", {
      month: "long",
    });

    const year = currentDate.value.getFullYear();

    return `${month[0].toUpperCase()}${month.slice(1)} ${year}`;
  });

  const blockPrev = computed(() => {
    return currentDate.value.getMonth() === now.getMonth();
  });

  const blockNext = computed(() => {
    return currentDate.value.getMonth() === 11;
  });

  const tableDays = computed(() => {
    const nullishDate = new Date(
      currentDate.value.getFullYear(),
      currentDate.value.getMonth() + 1,
      0
    );

    return nullishDate.getDate()
  });

  const rootClass = computed(() => ({
    "shared-calendar--opened": isOpened.value,
  }));

  const itemClassConstruct = (day: number, isNextMonth: boolean) => {
    if (!Array.isArray(selected.value)) {
    return {};
  }
    const offset = Number(isNextMonth);
    return {
    "shared-calendar__options-table--item-active": selected.value.find(el => el.getDate() === day && el.getMonth() === (currentDate.value.getMonth() + offset) && el.getFullYear() === currentDate.value.getFullYear())
  }
  };

  const tableItemClass = computed(() => (day: number) => itemClassConstruct(day, false)
  );
  const tableItemNextClass = computed(() => (day: number) => itemClassConstruct(day, true)
  );

  const handleArrows = (offset: number) => {
    const prevMonth = currentDate.value.getMonth() + offset;

    currentDate.value = new Date();
    currentDate.value.setMonth(prevMonth);
  };

  const handleDayClick = (day: number, isNextMonth = false) => {
    const date = new Date();
    date.setMonth(currentDate.value.getMonth());

    if (isNextMonth) {
      date.setMonth(date.getMonth() + 1);
    }
    date.setDate(day);

    currentDate.value = date
    emit("select", date);
  };
</script>

<style scoped lang="scss">
  .shared-calendar {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--indent-s);

    &__title {
      font-size: var(--font-size-m);
      font-weight: var(--font-weight-medium);
    }

    &__field {
      display: flex;
      align-items: center;
      gap: var(--indent-m);
      width: 100%;
      height: 51px;
      border: 1px solid var(--color-light-gray);
      border-radius: var(--indent-m);
      padding: var(--indent-m);
      background: #fff;
      cursor: pointer;
      user-select: none;

      &-selected {
        flex: 1;
        overflow: hidden;
        font-size: var(--font-size-m);
        font-weight: var(--font-weight-medium);
      }

      &-arrow {
        margin-left: auto;
        width: 30px;
        height: 30px;
        transition: 0.3s rotate ease-in-out;

        :deep(svg) {
          width: 100%;
          height: 100%;
        }
      }
    }

    &__options {
      position: absolute;
      z-index: 2;
      top: 100%;
      width: 100%;
      display: none;
      flex-direction: column;
      gap: var(--indent-m);
      padding: var(--indent-3xl);
      background: #fff;
      border: 1px solid var(--color-light-gray);
      border-top: none;
      border-radius: 0 0 var(--indent-m) var(--indent-m);
      box-shadow: 0px 4px 5px 5px #00000005;

      &-table {
        display: grid;
        grid-gap: 1px;
        max-width: calc(72px * 7);
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        border: 1px solid var(--color-light-gray);
        border-radius: 26px;
        overflow: hidden;
        border-collapse: collapse;

        &--item {
          display: flex;
          justify-content: center;
          aspect-ratio: 1 / 1;
          align-items: center;
          outline: 1px solid var(--color-light-gray);
          user-select: none;
          cursor: pointer;
          font-size: var(--font-size-s);
          font-weight: var(--font-weight-medium);

          &-active {
            background: var(--color-blue);
            outline: none;
            color: var(--color-white);
          }
        }
      }
    }

    &--opened {
      .shared-calendar__field {
        border-radius: var(--indent-m) var(--indent-m) 0 0;

        &-arrow {
          rotate: 180deg;
        }
      }

      .shared-calendar__options {
        display: flex;
      }
    }
  }
</style>
