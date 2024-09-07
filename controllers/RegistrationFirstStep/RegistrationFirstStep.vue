<template>
  <div class="first-step">
    <AuthenticationInput
      name="token"
      label="Уникальный токен"
      type="text"
      placeholder="Уникальный токен"
    >
      <template #icon>
        <AuthenticationTokenHelp />
      </template>
    </AuthenticationInput>
    <NuxtLink class="first-step__link" to="https://t.me/miy_ad_bot" external>
      Получить токен
    </NuxtLink>
    <AuthenticationButton :disabled="!meta.valid" @click="handleNextStep">
      Продолжить
    </AuthenticationButton>
  </div>
</template>

<script setup lang="ts">
import { object, string } from "yup";

const { meta, values } = useForm({
  validationSchema: object({
    token: string().required(rules.required).min(4, rules.minId).label(""),
  }),
});

const handleNextStep = () => {
  return navigateTo(`/authentication/registration?botToken=${values.token}`);
};
</script>

<style scoped lang="scss" src="./RegistrationFirstStep.scss"></style>
