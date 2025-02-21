<template>
  <div class="second-step">
    <div class="second-step__info">
      <AuthenticationInput
        name="uniqueBotId"
        label="Уникальный токен"
        type="text"
        placeholder="Уникальный токен"
        disabled
      />
    </div>
    <div class="second-step__content">
      <div class="second-step__content-radios">
        <AuthenticationRadio 
          name="workType" 
          label="ИП" 
          value="individual"
          v-model="values.workType"
          />
        <AuthenticationRadio
          name="workType"

          label="Самозанятый"
          value="self_employed"
          v-model="values.workType"
        />
      </div>
      <Transition name="fade">
        <div 
          class="second-step__content-tax_rate" 
          v-if="values.workType === 'individual'"
        >
          <div class="second-step__content-tax_rate-title">
            <h4>Налоговый режим</h4>
          </div>
          <div class="second-step__content-tax_rate-radios">
            <AuthenticationRadio
              v-for="taxRate in taxRates"
              :key="taxRate.id"
              name="taxRateId"
              :label="taxRate.value"
              :value="taxRate.id.toString()"
            />
          </div>
        </div>
      </Transition>
      <AuthenticationInput
        name="lastname"
        label="Фамилия"
        type="text"
        placeholder="Введите вашу фамилию"
      />
      <AuthenticationInput
        name="name"
        label="Имя"
        type="text"
        placeholder="Введите ваше имя"
      />
      <AuthenticationInput
        name="surname"
        label="Отчество"
        type="text"
        placeholder="Введите ваше отчество"
      />
      <AuthenticationInput
        name="email"
        label="E-mail"
        type="email"
        placeholder="Введите ваш e-mail"
      />
      <AuthenticationInput
        name="inn"
        label="ИНН"
        type="text"
        placeholder="Ваш ИНН"
      />
      <AuthenticationInput
        name="password"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
      />
    </div>
    <AuthenticationCheck name="personalData">
      Согласие на обработку персональных данных получение рассылок, а также с
      <NuxtLink
        class="second-step__content-link"
        to="https://on-developer.ru/Politic%20confidential/privacy__policy.pdf"
        external
        target="_blank"
      >
        Политикой конфиденциальности
      </NuxtLink>
    </AuthenticationCheck>
    <AuthenticationButton
      :disabled="!meta.valid || isLoading"
      @click="handleRegister"
    >
      Зарегистрироваться
    </AuthenticationButton>
  </div>
</template>

<script setup lang="ts">
import { boolean, number, object, string } from "yup";
import { useAuthStore } from "~/store/auth/auth.store";
import { validateInn } from "~/utils/validator.ts/inn.validator";

import { useTaxRateStore } from "~/store/tax-rate/tax-rate.store";

const route = useRoute();

const authStore = useAuthStore();
const { isLoading } = storeToRefs(authStore);

const taxRateStore = useTaxRateStore();
const { taxRates } = storeToRefs(taxRateStore);

onMounted(() => {
  taxRateStore.fetchTaxRates();
});

const { meta, values } = useForm({
  validationSchema: object({
    uniqueBotId: string()
      .required(rules.required)
      .min(4, rules.minId)
      .label(""),
    workType: string().required(rules.required).label(""),
    taxRateId: number()
      .when("workType", {
        is: "individual",
        then: (schema) => schema.required(rules.required),
        otherwise: (schema) => schema.notRequired(),
      })
      .label(""),
    lastname: string().required(rules.required).min(2, rules.minLastName).label(""),
    name: string().required(rules.required).min(2, rules.minFirstName).label(""),
    surname: string().required(rules.required).min(2, rules.minMiddleName).label(""),
    email: string().email(rules.email).required(rules.required).label(""),
    inn: string()
      .required(rules.required)
      .label("")
      .test("validateInn", rules.inn, validateInn),
    password: string()
      .min(10, rules.minPassword)
      .max(40, rules.maxPassword)
      .matches(/^(?=.*[0-9])/, rules.number)
      .matches(/^(?=.*[A-Z])/, rules.letter)
      .matches(/^(?=.*[!@#$%^&*])/, rules.symbol)
      .required(rules.required)
      .label(""),
    personalData: boolean().required(rules.required).isTrue(),
  }),
  initialValues: {
    uniqueBotId: route.query.botToken,
    workType: "individual",
    taxRateId: 1,
  },
});

const handleRegister = async () => {
  const isSuccess = await authStore.registration({
    ...values,
    isNotification: true,
    taxRateId: values.workType === "individual" ? Number(values.taxRateId) : null
  });
  if (!isSuccess) return;

  return navigateTo("/authentication/complete");
};
</script>

<style scoped lang="scss" src="./RegistrationSecondStep.scss"></style>
