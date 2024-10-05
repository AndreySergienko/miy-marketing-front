<template>
  <section class="telegram-edit-main">
    <h2 class="telegram-edit-main__title">Основная информация</h2>
    <AuthenticationInput
      class="telegram-edit-main__input"
      name="name"
      label="Название"
      type="text"
      placeholder="Введите название"
      disabled
    />
    <AuthenticationInput
      class="telegram-edit-main__input"
      name="url"
      label="Ссылка на канал"
      type="text"
      placeholder="Введите ссылку"
      disabled
    />
    <DefaultSelect
      class="telegram-edit-main__input"
      label="Категория"
      name="category"
      placeholder="Развлечение"
      :options="categories"
    />
  </section>
</template>

<script setup lang="ts">
import type {
  ITelegramEditMainProps,
  ITelegramEditMainEmits,
} from "./TelegramEditMain.types";

const props = defineProps<ITelegramEditMainProps>();
const { name, url, category } = toRefs(props);

const emit = defineEmits<ITelegramEditMainEmits>();

const { values } = useForm({
  initialValues: {
    name: name.value,
    url: url.value,
    category: category.value,
  },
});

watch(
  () => values,
  () => {
    emit("changeData", values);
  },
  { deep: true }
);
</script>

<style scoped lang="scss" src="./TelegramEditMain.scss"></style>
