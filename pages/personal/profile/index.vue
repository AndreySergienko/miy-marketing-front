<template>
  <main class="profile-page">
    <ProfileWorkType v-if="false" />
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
          <div
            class="profile-page__input-item"
            @mouseover="activeToolTip = true"
            @mouseleave="activeToolTip = false"
            >
            <AuthenticationInput
            label="Расчетный счет"
            type="text"
            name="bankCurAccount"
            placeholder="Введите расчетный счет"
          />
          <SharedTooltip
          v-if="activeToolTip"
          :is-active="activeToolTip"
          class="profile-channels-item__panel-controls--tooltip"
          text="*Если у вас статус ИП, то необходимо указать реквизиты ИП"
          border-color="#ffd0d0"
        />
          </div>
        </div>
      </section>
      <section v-if="false" class="profile-page__block">
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
    <div class="profile-page__radio-content">
      <div class="profile-page__radio-content-instruction">
        Если Вы выбрали <span class="weight">уведомительный порядок</span>, то
        при каждой заявке на рекламную интеграцию ТГ-бот платформы будет
        отправлять сообщение с информацией о потенциальной интеграции и Вам
        предстоит подтвердить или отклонить сделку исходя из критериев контента.
        В случае положительного ответа ТГ-бот опубликует рекламу.
        <br />
        Если Вы выбрали <span class="weight">автоматический порядок</span>, то
        заявки на рекламные интеграции, которую будут поступать с нашей
        платформы будут модерироваться нашей командой исходя из ваших критериев,
        которые вы прописали при размещении ТГ-канала на платформу. В этом
        <span class="weight">
          случае Вы должны проставить даты и всегда оставлять указанный/-е
          временной/-е слот/-ы и интервал для рекламных интеграций, поступающих
          с ON-Developer в календаре рекламных интеграций Вашего канала
        </span>
        . <br />
        ТГ-бот опубликует, удалит пост, а средства автоматически поступят на
        карту, которую вы привязали в личном кабинете.
      </div>
      <div class="profile-page__radio-content-controls">
        <AuthenticationRadio
          class="profile-page__radio-content-controls--item"
          :value="true"
          label="Уведомительный порядок"
          name="isNotification"
        />
        <AuthenticationRadio
          class="profile-page__radio-content-controls--item"
          :value="false"
          label="Автоматический порядок"
          name="isNotification"
        />
      </div>
    </div>
    <ProfileWorkTypePopup />
  </main>
</template>

<script setup lang="ts">
import AuthenticationRadio from "~/components/AuthenticationRadio/AuthenticationRadio.vue";
import { useUserStore } from "~/store/user/user.store";

const activeToolTip = ref(false)

definePageMeta({
  layout: "personal",
});

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const { values } = useProfileForm(user);

const handleMainData = () => {
  const {
    fio,
    email,
    inn,
    bankName,
    bankBik,
    bankCorAccount,
    bankCurAccount,
    isNotification,
  } = values;

  userStore.updateUser({
    fio,
    email,
    inn,
    isNotification,
    bank: {
      name: bankName,
      bik: bankBik,
      correspondentAccount: bankCorAccount,
      currentAccount: bankCurAccount,
    },
  });
};

const handlePasswordData = () => {
  const { password, newPassword, repeatPassword } = values;

  if (!password || !newPassword || newPassword !== repeatPassword) return;
  userStore.updateUserPassword({
    password,
    newPassword,
  });
};

const handleSave = async () => {
  handleMainData();
  handlePasswordData();
};
</script>

<style lang="scss" scoped>
@use "assets/styles/media";

.profile-page__input-item {
  position: relative;
}

.profile-page {
  position: relative;
  width: 328px;
  display: flex;
  flex-direction: column;

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
    order: 2;

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

  &__radio-content {
    order: 1;
    margin-top: 40px;
    border: 1px solid var(--new-primary);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: var(--new-white);

    @include media.media-breakpoint-up(lm) {
      position: absolute;
      top: 0;
      right: 0;
      max-width: 420px;
    }

    &-instruction {
      font-size: 12px;
      font-weight: 500;

      .weight {
        font-weight: 700;
      }
    }

    &-controls {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
