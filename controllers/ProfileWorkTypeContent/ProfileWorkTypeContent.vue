<template>
  <section class="profile-work-type-content">
    <DefaultSelect
      label="Статус налогоплательщика"
      name="workType"
      placeholder="Индивидуальный предприниматель"
      :options="[
        { label: 'Индивидуальный предприниматель', value: 'individual' },
        { label: 'Самозанятый', value: 'self-employed' },
      ]"
    />
    <div class="file-input">
      <h2 class="file-input__title">Подтверждающие документы</h2>
      <p class="file-input__instruction">
        Загрузите справку о постановке на учет НПД или Свидетельство о
        регистрации ИП
      </p>
      <input
        class="file-input__field"
        type="file"
        ref="fileRef"
        accept="application/pdf"
        @change="handleFileChange"
      />
      <div class="file-input__selected">
        <div
          v-if="file"
          :class="['file-input__selected-content', status.className]"
        >
          <NuxtIcon
            class="file-input__selected-content--icon"
            name="file-input-pdf"
            filled
          />
          <span class="file-input__selected-content--name">
            {{ file.name }}
          </span>
          <NuxtIcon
            class="file-input__selected-content--remove"
            name="file-input-remove"
            filled
            @click="removeFile"
          />
        </div>
      </div>
      <span v-if="fileInfo" :class="['file-input__info', status.className]">
        {{ fileInfo }}
      </span>
      <div
        class="file-input__drag"
        @click="addFile"
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
      >
        <span class="file-input__drag-text">
          Выберите файл или перетащите его сюда
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const status = computed(() => ({
  text: "Подтвержден",
  className: "accept",
}));

const fileRef = ref<HTMLInputElement>();

const fileInfo = computed(() => {
  const texts = {
    reject: "Документ просрочен или не прошел проверку.",
    process: "Документ на проверке.",
  };

  return texts[status.value.className as keyof typeof texts];
});

const {
  file,
  handleDragOver,
  handleFileChange,
  handleDrop,
  addFile,
  removeFile,
} = useFileHandler(fileRef);
</script>

<style scoped lang="scss" src="./ProfileWorkTypeContent.scss"></style>
