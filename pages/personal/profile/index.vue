<template>
  <main class="profile-page">
    <ProfileWorkType />
    <div class="profile-page__content">
      <section class="profile-page__block">
        <div class="profile-page__block-text">
          <h2 class="profile-page__block-text--title">Основное</h2>
          <p class="profile-page__block-text--description">
            Ваша персональная и контактная информация
          </p>
        </div>
        <div class="profile-page__block-inputs">
          <AuthenticationInput
            label="ФИО"
            type="text"
            name="fio"
            placeholder="Введите ФИО"
          />
          <AuthenticationInput
            label="E-mail"
            type="email"
            name="email"
            placeholder="Введите E-mail"
          />
          <AuthenticationInput
            label="ИНН"
            type="text"
            name="inn"
            placeholder="Введите ИНН"
          />
        </div>
      </section>
      <section class="profile-page__block">
        <div class="profile-page__block-text">
          <h2 class="profile-page__block-text--title">Реквизиты</h2>
          <p class="profile-page__block-text--description">
            Укажите ваши реквизиты
          </p>
        </div>
        <div class="profile-page__block-inputs">
          <AuthenticationInput
            label="Название банка"
            type="text"
            name="bankName"
            placeholder="Введите название банка"
          />
          <AuthenticationInput
            label="БИК банка"
            type="text"
            name="bankBik"
            placeholder="Введите БИК банка"
          />
          <AuthenticationInput
            label="Корреспондентский счет"
            type="text"
            name="bankCorAccount"
            placeholder="Введите корреспондентский счет"
          />
          <AuthenticationInput
            label="Расчетный счет"
            type="text"
            name="bankCurAccount"
            placeholder="Введите расчетный счет"
          />
        </div>
      </section>
      <section class="profile-page__block">
        <div class="profile-page__block-text">
          <h2 class="profile-page__block-text--title">Смена пароля</h2>
          <p class="profile-page__block-text--description">
            Обновить пароль учетной записи
          </p>
        </div>
        <div class="profile-page__block-inputs">
          <AuthenticationInput
            label="Текущий пароль"
            type="password"
            name="password"
            placeholder="Введите пароль"
            show-password-icon
          />
          <AuthenticationInput
            label="Новый пароль"
            type="password"
            name="newPassword"
            placeholder="Введите новый пароль"
            show-password-icon
          />
          <AuthenticationInput
            label="Повторите пароль"
            type="password"
            name="repeatPassword"
            placeholder="Повторите новый пароль"
            show-password-icon
          />
        </div>
      </section>
      <DefaultButton class="profile-page__button" @click="handleSave">
        Сохранить
      </DefaultButton>
    </div>
    <ProfileWorkTypePopup />
  </main>
</template>

<script setup lang="ts">
import { object, string } from "yup";
import { useUserStore } from "~/store/user/user.store";
import { validateInn } from "~/utils/validator.ts/inn.validator";

definePageMeta({
  layout: "personal",
});

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const passwordRules = string()
  .min(10, rules.minPassword)
  .max(40, rules.maxPassword)
  .matches(/^(?=.*[0-9])/, rules.number)
  .matches(/^(?=.*[A-Z])/, rules.letter)
  .matches(/^(?=.*[!@#$%^&*])/, rules.symbol)
  .label("");

const { meta, values } = useForm({
  validationSchema: object({
    fio: string().required(rules.required).label(""),
    email: string().email(rules.email).required(rules.required).label(""),
    inn: string()
      .required(rules.required)
      .test("validateInn", rules.inn, validateInn)
      .label(""),

    bankName: string().label(""),
    bankBik: string().label(""),
    bankCorAccount: string().label(""),
    bankCurAccount: string().label(""),

    password: passwordRules,
    newPassword: passwordRules,
    repeatPassword: passwordRules,
  }),
  initialValues: {
    fio: user.value?.fio,
    email: user.value?.email,
    inn: user.value?.inn,

    bankName: user.value?.bank?.name,
    bankBik: user.value?.bank?.bik,
    bankCorAccount: user.value?.bank?.correspondentAccount,
    bankCurAccount: user.value?.bank?.currentAccount,

    password: "",
    newPassword: "",
    repeatPassword: "",
  },
});

const handleSave = async () => {
  if (!meta.valid) return;

  const {
    fio,
    email,
    inn,
    bankName,
    bankBik,
    bankCorAccount,
    bankCurAccount,
    password,
    newPassword,
    repeatPassword,
  } = values;

  userStore.updateUser({
    fio,
    email,
    inn,
    bank: {
      name: bankName,
      bik: bankBik,
      correspondentAccount: bankCorAccount,
      currentAccount: bankCurAccount,
    },
  });

  if (password && newPassword && newPassword === repeatPassword) {
    userStore.updateUserPassword({
      password,
      newPassword,
    });
  }
};
</script>

<style lang="scss" scoped>
@use "assets/styles/media";

.profile-page {
  margin-top: 40px;
  position: relative;
  width: 328px;

  @include media.media-breakpoint-up(md) {
    width: 465px;
  }

  @include media.media-breakpoint-up(lm) {
    width: auto;
  }

  &__content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 328px;

    @include media.media-breakpoint-up(md) {
      width: 465px;
    }

    @include media.media-breakpoint-up(lm) {
      margin-top: 0;
      width: 382px;
    }

    @include media.media-breakpoint-up(l) {
      margin-top: 62px;
      width: 400px;
    }

    @include media.media-breakpoint-up(xl) {
      width: 472px;
    }

    @include media.media-breakpoint-up(xxl) {
      width: 672px;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-text {
      display: flex;
      flex-direction: column;
      gap: 15px;

      &--title {
        font-size: 16px;
        font-weight: 600;
        line-height: 12px;
        color: #2d3648;
      }

      &--description {
        font-size: 14px;
        font-weight: 500;
        line-height: 10px;
        color: #2d364880;
      }
    }

    &-inputs {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  &__button {
    width: 105px;
  }
}
</style>
