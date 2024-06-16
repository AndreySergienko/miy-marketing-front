<template>
  <ProfileContainer>
    <template #form>
      <div class="location container">
        <SharedTitle class="location__title">Размещение TG-каналов</SharedTitle>
        <ChannelInitial v-if="initialChannelData" v-bind="initialChannelData" />
        <div class="location__inner">
          <SharedInput
            name="name"
            type="text"
            :is-disabled="true"
            v-model="newChannel.name"
          >
            Название
          </SharedInput>
          <SharedSelect
            title="Выбор категории"
            :selected="selectedCategory"
            :options="categories"
            @select="handleCategorySelect"
          />
          <div class="location__calendar">
            <span class="location__calendar-title">
              Заполните календарь доступных рекламных слотов в вашем TG-канале
            </span>
            <SharedCalendar
              title="Календарь"
              :selected="newChannel.days"
              @select="addDate"
            />
            <SharedSelect
              title="Интервал"
              :selected="`${newChannel.formatChannel}`"
              :options="intervals"
              @select="newChannel.formatChannel = +$event"
            />

            <div class="location__calendar-item">
              <SharedMultiselect
                title="Слоты"
                class="location__calendar-item-interval"
                :selected="newChannel.slots"
                :options="shownSlots"
                @select="handleSlotsSelect"
                @unselect="handleSlotsUnselect"
              />
              <SharedInput
                name="price"
                type="number"
                v-model="newChannel.price"
              >
                Цена
              </SharedInput>
            </div>
          </div>
          <SharedInput
            name="link"
            type="text"
            v-model="newChannel.link"
            :is-disabled="true"
            class="location__input-link"
          >
            <SharedTooltip 
              :is-active="isTooltipActive"
              class="tooltip"
              text="* устанавливается автоматически при регистрации канала"
              border-color="#ffd0d0"
            />
            Ссылка на канал тг
            <nuxt-icon 
              name="question" 
              class="tooltip__icon" 
              @pointerover="isTooltipActive = true"
              @pointerleave="isTooltipActive = true"
              filled/>
          </SharedInput>
          <SharedInput
            name="conditionCheck"
            type="text"
            v-model="newChannel.conditionCheck"
            class="location__input-moderation"
          >
            Предпочтение модерации
          </SharedInput>
          <SharedButton
            class="location__btn"
            :color="buttonColor"
            size="xl"
            @click="submitNewChannel"
          >
            Отправить
          </SharedButton>
        </div>
      </div>
    </template>
  </ProfileContainer>
</template>

<script setup lang="ts">
  import { useAlertStore } from "~/store/alert/alert.store";
  import { useCategoriesStore } from "~/store/categories/categories.store";
  import { useChannelStore } from "~/store/channel/channel.store";

  const isTooltipActive = ref(false);

  definePageMeta({
    layout: "personal",
  });

  const intervals = [
    { title: "1/24", value: "1" },
    { title: "1/48", value: "2" },
    { title: "30/24", value: "3" },
  ];

  const slots = Array.from({ length: 48 }, (_, i) => {
    const hour = `${String(Math.floor(i / 2) + 1).padStart(2, "0")}`;
    const minute = `${(i % 2) * 30}`.padStart(2, "0");

    return {
      title: `${hour}:${minute}`,
      value: `${hour}:${minute}`,
    };
  });

  const categoriesStore = useCategoriesStore();
  const { categories } = storeToRefs(categoriesStore);

  const channelsStore = useChannelStore();
  const { initialChannelData } = storeToRefs(channelsStore);

  await useAsyncData("location-first-data", () => {
    return categoriesStore.getAll();
  });

  const { newChannel, addDate, createApiData } = useRegistrationData()

  const selectedCategory = ref("");

  const shownSlots = computed(() => {
    switch (newChannel.formatChannel) {
      case 1:
      case 2:
        return slots.filter((slot) => !slot.value.endsWith("30"));
      case 3:
        return slots;
      default:
        return [];
    }
  });

  const buttonColor = computed(() => {
    if (newChannel.name === "") return "gray";
    return "blue";
  });

  const handleCategorySelect = (value: string) => {
    const foundCategory = categories.value.find((c) => c.value === value);
    if (!foundCategory) return;

    selectedCategory.value = foundCategory.value;
    newChannel.categoriesId = [foundCategory.id];
  };

  const handleSlotsSelect = (value: string) => {
    newChannel.slots.push(value);
  };

  const handleSlotsUnselect = (value: string) => {
    const index = newChannel.slots.indexOf(value);
    newChannel.slots.splice(index, 1);
  };

  const submitNewChannel = async () => {
    if (!newChannel.days.length) return;

    await channelsStore.create(createApiData());
  };

  onBeforeMount(() => {
    if (!initialChannelData.value) return navigateTo("/personal/connect");

    newChannel.name = initialChannelData.value.name;
    newChannel.link = initialChannelData.value.link;
  });

  watch(
    () => newChannel.formatChannel,
    () => {
      newChannel.slots = [];
    }
  );
</script>

<style scoped lang="scss" src="./style.scss" />
