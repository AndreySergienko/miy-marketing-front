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
          <div class="tg__header">
            <div class="tg__categories">
              <SharedCategories
                :active-categories="activeCategories"
                :categories-list="categories"
                @set-category="categoriesStore.updateActiveCategories"
              />  
            </div>
            <div class="tg__filters">
              <SharedFilter
                v-for="filter in filters"
                :key="filter.key"
                :title="filter.title"
                v-model="filterValues[filter.key]"
              />
            </div>
          </div>
        </div>
        <FilterCalendarController />
        <div class="card__list">
          <div v-for="channel in channelsAll" :key="channel.id" class="card__list-items">
            <SharedCard
              :currency="'RUB'"
              :subscribers="channel.subscribers"
              :avatar="channel.avatar"
              :class="{ 'card--disabled': !channel.channelDates.length }"
            >
              <template #title>
                <SharedCardTitle>{{ channel.name }}</SharedCardTitle>
              </template>
              <template #description>
                <SharedCardText>{{ channel.description }}</SharedCardText>
              </template>
              <template #actions>
                <div v-if="!permissions?.CAN_BUY">
                  Авторизуйтесь и добавьте почту
                </div>
                <div v-else-if="!channel.channelDates.length">Нет доступных слотов</div>
                <SharedButton
                  v-else
                  class="action__button"
                  color="blue"
                  @click="setInfoChannel(channel)"
                >
                  Выбрать дату
                  <nuxt-icon
                    class="action__button-icon"
                    name="chevron"
                    filled
                  />
                </SharedButton>
              </template>
            </SharedCard>
          </div>
        </div>
      </div>
    </div>

    <SharedModal v-if="activeChannel" @close="clearInfoChannel">
        <ChannelDetails
          v-bind="{
           ...activeChannel,
           url: activeChannel.link
          }"
          :dates="getFormattedDates(activeChannel.channelDates)"
          :category="activeChannel.categories[0].description"
          @close="clearInfoChannel"
          td-actions
        >
          <template #tdActions="{ slotId, dateIdx }">
            <DefaultButton class="buy" @click="buy(+slotId, +dateIdx)">
              Купить
            </DefaultButton>
          </template>
        </ChannelDetails>
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
import {useFormatsStore} from "~/store/formats/formats.store";
import { useFormattedDates } from "~/composables/useFormattedDates";

const channelStore = useChannelStore();
const userStore = useUserStore();


const { getAllFormat } = useChannelStore();
const { channelsAll } = storeToRefs(channelStore);


const categoriesStore = useCategoriesStore();
const {getQueryCategories, activeCategories, categories } = storeToRefs(categoriesStore);
console.log('Категории:', categories.value)
const { getAll } = useCategoriesStore();

const formatsStore = useFormatsStore();
const { formats } = storeToRefs(formatsStore);

await useAsyncData(
     "my-channels",
     async () => {
       const results = await Promise.allSettled([formatsStore.fetch(), categoriesStore.fetch()]);
       console.log("Результат подгрузки:", results);
       return results;
     },
     { lazy: true }
);

onMounted(() => {
  getAllFormat();
})

/** format */
const {getFormattedDates} = useFormattedDates(formats);

/** pagination **/
const { paginationQuery } = usePagination();
/** categories **/
const calendarStore = useCalendarStore();
const { dates } = storeToRefs(calendarStore);

const { permissions } = storeToRefs(userStore);
const alertStore = useAlertStore();
const {
  clearInfoChannel,
  setInfoChannel,
  activeChannel,
} = useBuyChannel();

/**filters */
const filters = [
  { key: "price", title: "цена" },
  { key: "time", title: "время" },
  { key: "interval", title: "интервал" },
  { key: "subscribers", title: "подписчики" },
];

const filterValues = reactive({
  price: { from: "", to: "" },
  time: { from: "", to: "" },
  interval: "",
  subscribers: { from: "", to: "" },
});

const fetchChannels = async () => {
  const params = new URLSearchParams();

  if (filterValues.price.from || filterValues.price.to) {
    params.append("price_from", filterValues.price.from);
    params.append("price_to", filterValues.price.to);
  }
  if (filterValues.time.from || filterValues.time.to) {
    params.append("time_from", filterValues.time.from);
    params.append("time_to", filterValues.time.to);
  }
  if (filterValues.interval) {
    params.append("interval", filterValues.interval);
  }
  if (filterValues.subscribers.from || filterValues.subscribers.to) {
    params.append("subscribers_from", filterValues.subscribers.from);
    params.append("subscribers_to", filterValues.subscribers.to);
  }

  // Вывод query в консоль
  console.log("Query отправляется на бэк:", params.toString());

  const { data, error } = await useFetch(
    `https://on-developer.ru/api/v1/channels/all?${params.toString()}`
  );

  if (error.value) {
    console.error("Ошибка при загрузке каналов:", error.value);
    return;
  }

  channelsAll.value = data.value || [];
};

watch(filterValues, fetchChannels, { deep: true });
onMounted(fetchChannels);

const buy = async (slotId: number, dateIdx: number) => {
  if (!slotId) {
    alertStore.showError({ title: "Укажите время" });
    return;
  }
  if (!dateIdx && +dateIdx !== 0) {
    alertStore.showError({ title: "Укажите дату" });
    return;
  }
  await channelStore.buy(slotId, dateIdx);
  clearInfoChannel();
};

async function fetchChannelsWithStore(isMounted?: boolean) {
  const fullPath = getQueryCategories.value
    ? paginationQuery.value + "&" + getQueryCategories.value
    : paginationQuery.value;
  await channelStore.getAll({ dates: dates.value, url: fullPath, isMounted });
}

watch(paginationQuery, async () => await fetchChannelsWithStore());

watch(activeCategories, async () => await fetchChannelsWithStore(true), { deep: true });

useAsyncData(() =>
  channelStore.getAll({
    dates: dates.value,
    url: paginationQuery.value,
    isMounted: true,
  })
);

watch(dates, async () => await fetchChannelsWithStore(true), { deep: true });
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

    @include media.media-breakpoint-down(sm) {
      width: 95%;
    }
  }
  &__header {
    max-width: calc(100vw - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    &-title {
    align-self: flex-start;
    font-size: 30px;
    line-height: 21px;
    font-weight: 700;

    @include media.media-breakpoint-down(sm) {
      font-size: 18px;
      max-width: 300px;
    }
  }
  }

  &__filters {
    display: flex;
    justify-content: center;
    gap: var(--indent-xl);
  }
}

.card__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--indent-2xl);

  &-items {
    display: contents;
  }

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

.buy {
  width: 100%;
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
