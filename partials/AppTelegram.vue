<template>
  <div class="tg" id="telegram">
    <div class="container">
      <div class="tg__inner">
        <div class="tg__text">
          <SharedTitle>Telegram-каналы</SharedTitle>
          <SharedText>
            Выберите каналы для размещения вашей рекламы из списка на нашей
            главной странице. У нас вы найдете каналы по теме "экономика,
            бизнес", где ваша реклама будет наиболее эффективной.
          </SharedText>
        </div>
        <FilterCalendarController />
        <div class="card__list">
          <SharedCard
            v-for="card in channelsAll"
            :key="card.channel.id"
            :price="card.channel.price"
            :currency="'RUB'"
            :subscribers="card.channel.subscribers"
            :avatar="card.channel.avatar"
            :interval="currentFormat(card.channel.formatChannelId)"
          >
            <template #title>
              <SharedCardTitle>{{ card.channel.name }}</SharedCardTitle>
            </template>
            <template #description>
              <SharedCardText>{{ card.channel.description }}</SharedCardText>
            </template>
            <template #actions>
              <div v-if="!permissions?.CAN_BUY">
                Авторизуйтесь и добавьте почту
              </div>
              <div v-else-if="!card.slots.length">Нет доступных слотов</div>
              <SharedButton
                v-else
                class="action__button"
                color="blue"
                @click="setInfoChannel(card.slots, card.channel.days)"
              >
                Выбрать дату
                <nuxt-icon class="action__button-icon" name="chevron" filled />
              </SharedButton>
            </template>
          </SharedCard>
        </div>
      </div>
    </div>

    <SharedModal v-if="activeSlots.length" @close="clearInfoChannel">
      <div class="modal-telegram">
        <SharedSelect
          title="Выбрать дату"
          :selected="dateIdx"
          :options="days"
          @select="dateIdx = $event"
        />
        <SharedSelect
          title="Выбрать время"
          :selected="slotId"
          :options="times"
          @select="slotId = $event"
        />
        <SharedButton
          :is-disabled="!slotId || isLoading || !dateIdx"
          :is-loading="isLoading"
          class="modal-telegram__btn"
          color="blue"
          @click="buy"
          >Купить</SharedButton
        >
      </div>
    </SharedModal>
    <a href="/channels" class="more" v-if="channelsAll.length > 0">
      <p class="more__text">Смотреть еще</p>
      <nuxt-icon class="more__icon" name="arrow" filled />
    </a>
  </div>
</template>
<script setup lang="ts">
import { useChannelStore } from "~/store/channel/channel.store";
import { useCategoriesStore } from "~/store/categories/categories.store";
import { useUserStore } from "~/store/user/user.store";
import { useAlertStore } from "~/store/alert/alert.store";
import { useCalendarStore } from "~/store/filters/calendar.store";
import FilterCalendarController from "~/controllers/FilterCalendarController/FilterCalendarController.vue";

const channelStore = useChannelStore();
const userStore = useUserStore();

const { getAllFormat } = useChannelStore();
const { formatAll } = toRefs(channelStore);

const currentFormat = (formatChannelId: number) => {
  const format = formatAll.value.find((item) => item.id === formatChannelId);
  if (!format) return "Нет подходящего формата";
  return format.value;
};

/** pagination **/
const { paginationQuery, incrementPage } = usePagination();
/** categories **/
const categoriesStore = useCategoriesStore();
const calendarStore = useCalendarStore();
const { dates } = storeToRefs(calendarStore);

const { permissions } = storeToRefs(userStore);
const { isLoading } = storeToRefs(channelStore);
const { getQueryCategories, activeCategories } = storeToRefs(categoriesStore);
const { channelsAll } = storeToRefs(channelStore);
const alertStore = useAlertStore();
const {
  clearInfoChannel,
  setInfoChannel,
  slotId,
  times,
  activeSlots,
  dateIdx,
  days,
} = useBuyChannel();

const buy = async () => {
  if (!slotId.value) {
    alertStore.showError({ title: "Укажите время" });
    return;
  }
  if (!dateIdx.value && +dateIdx.value !== 0) {
    console.log(dateIdx.value);

    alertStore.showError({ title: "Укажите дату" });
    return;
  }
  await channelStore.buy(+slotId.value, +dateIdx.value);
  clearInfoChannel();
};

async function fetchChannels(isMounted?: boolean) {
  const fullPath = getQueryCategories.value
    ? paginationQuery.value + "&" + getQueryCategories.value
    : paginationQuery.value;
  await channelStore.getAll({ dates: dates.value, url: fullPath, isMounted });
}

watch(paginationQuery, async () => await fetchChannels());

watch(activeCategories, async () => await fetchChannels(true), { deep: true });

useAsyncData(() =>
  channelStore.getAll({
    dates: dates.value,
    url: paginationQuery.value,
    isMounted: true,
  })
);

onMounted(() => {
  getAllFormat();
});

watch(dates, async () => await fetchChannels(true), { deep: true });
</script>

<style scoped lang="scss">
@use "assets/styles/media";
.tg {
  padding-top: 150px;
  margin-top: -50px;
  -webkit-background-clip: content-box;
  background-clip: content-box;

  margin-bottom: var(--indent-4xl);

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    width: 50%;
    text-align: center;
    margin-bottom: var(--indent-4xl);

    @include media.media-breakpoint-down(sm) {
      width: 95%;
    }
  }
}

.card__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--indent-2xl);

  @include media.media-breakpoint-down(xl) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media.media-breakpoint-down(md) {
    padding: 0 var(--indent-2xl);
    grid-template-columns: repeat(2, 1fr);
  }

  @include media.media-breakpoint-down(sm) {
    padding: 0 150px;
    grid-template-columns: repeat(1, 1fr);
  }
}

.more {
  margin-bottom: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__text {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    margin-right: var(--indent-s);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-s);
    }
  }

  &__icon {
    font-size: var(--font-size-m);
  }
}

.modal-telegram {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__btn {
    margin: 0 auto;
    width: 150px;
  }
}

.action__button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: var(--indent-m) 0;
  gap: var(--indent-m);

  font-size: var(--font-size-m);

  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--color-white);
  background-color: var(--color-blue);

  @include media.media-breakpoint-down(sm) {
    font-size: var(--font-size-s);
    gap: var(--indent-s);
  }

  &-icon {
    font-size: var(--font-size-m);

    @include media.media-breakpoint-down(sm) {
      font-size: var(--font-size-s);
    }
  }
}
</style>
