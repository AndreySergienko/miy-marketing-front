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
            v-model="newChannel.name"
            :is-disabled="true"
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
            <SharedMultiselect
              title="Слоты"
              :selected="newChannel.slots"
              :options="shownSlots"
              @select="handleSlotsSelect"
              @unselect="handleSlotsUnselect"
            />
            <div class="location__calendar-item">
              <SharedSelect
                class="location__calendar-item-interval"
                title="Интервал"
                :selected="`${newChannel.formatChannel}`"
                :options="intervals"
                @select="newChannel.formatChannel = +$event"
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
            is-disabled
            v-model="newChannel.link"
            class="location__input-link"
          >
            Ссылка на канал тг
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
            Изменить
          </SharedButton>
        </div>
      </div>
    </template>
  </ProfileContainer>
</template>

<script setup lang="ts">
  import { useCategoriesStore } from "~/store/categories/categories.store";
  import { useChannelStore } from "~/store/channel/channel.store";

  definePageMeta({
    layout: "personal",
  });

  const route = useRoute();
  const id = route.params.id;

  const { newChannel, addDate, createApiData } = useRegistrationData()

  const intervals = [
    { title: "1/24", value: "1" },
    { title: "1/48", value: "2" },
    { title: "30/24", value: "3" },
  ];

  const slots = Array.from({ length: 48 }, (_, i) => {
    const hour = `${Math.floor(i / 2)}`.padStart(2, "0");
    const minute = `${(i % 2) * 30}`.padStart(2, "0");

    return {
      title: `${hour}:${minute}`,
      value: `${hour}:${minute}`,
    };
  });

  const categoriesStore = useCategoriesStore();
  const { categories } = storeToRefs(categoriesStore);

  const channelsStore = useChannelStore();
  const { channels, initialChannelData } = storeToRefs(channelsStore);

  if (!channels.value.length) {
    await useAsyncData("channels", () => channelsStore.getMy());
  }

  await useAsyncData("location-first-data", () => {
    return categoriesStore.getAll();
  });

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
    if (!newChannel.days) return;

    await channelsStore.create(createApiData());
  };
  const isMounted = ref<boolean>(false)
  onBeforeMount(() => {
    const channel = channels.value.find((c) => c.id === +id.toString());
    if (!channel) return;

    const category = categories.value.find((c) => c.id === channel.categories[0]);
    selectedCategory.value = category?.value || "";
    console.log(channel)
    newChannel.categoriesId = channel.categories;
    newChannel.name = channel.name;
    newChannel.link = channel.link;
    newChannel.days = channel.days.map(dateInvalid => {
      const [day, month, year] = dateInvalid.split('.')
      const date = new Date(`${month}.${day}.${year}`)
      return date
      }
    );
    newChannel.formatChannel = channel.formatChannelId;
    newChannel.slots = channel.slots.map(slot => {
      const newDate = new Date(+slot.timestamp)
      const hours = newDate.getHours()
      const minutes = newDate.getMinutes()
      return `${hours}:${minutes}0`
    })
    newChannel.price = `${channel.price}`;
    newChannel.conditionCheck = channel.conditionCheck;

    initialChannelData.value = {
      avatar: channel.avatar,
      description: channel.description,
      name: channel.name,
      link: channel.link,
      subscribers: channel.subscribers,
    };
  });

  onMounted(() => isMounted.value = true)

  watch(
    () => newChannel.formatChannel,
    () => {
      if (!isMounted.value) return
      newChannel.slots = [];
    }
  );
</script>

<style scoped lang="scss" src="./style.scss" />
