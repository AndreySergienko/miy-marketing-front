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
    />
    <AuthenticationInput
      class="telegram-edit-main__input"
      name="conditionCheck"
      label="Критерии модерации"
      type="text"
      placeholder="Текст"
    />
    <div class="telegram-edit-main__input">
      <DefaultSelect
        label="Категория"
        name="category"
        :options="categories"
        v-model="values.category"
        @click="errorCategory"
      />
      <p v-if="errors.category" class="error-message">{{ errors.category }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {
  ITelegramEditMainProps,
  ITelegramEditMainEmits,
  ITelegramEditMainError,
  ITelegramEditMainExpose,
} from "./TelegramEditMain.types";
import { string } from "yup";

const props = defineProps<ITelegramEditMainProps>();
const { name, url, conditionCheck, category } = toRefs(props);
const emit = defineEmits<ITelegramEditMainEmits>();

const errors: ITelegramEditMainError = reactive({
  category: "",
});

const { values } = useForm({
  initialValues: {
    name: name.value,
    conditionCheck: conditionCheck.value,
    url: url.value,
    category: category.value,
  },
  validationSchema: {
    category: string().required(rules.required).label("Категория"),
  },
});

const errorCategory = (): void => {
  if (!values.category) {
    errors.category = "* Укажите категорию канала";
  } else {
    errors.category = "";
  }
};

const validateCategory = (): boolean => {
  errorCategory();
  return errors.category === "";
};

defineExpose<ITelegramEditMainExpose>({ validateCategory });

watch(
  () => values,
  () => {
    emit("changeData", values);
  },
  { deep: true }
);
</script>

<style scoped lang="scss" src="./TelegramEditMain.scss"></style>
