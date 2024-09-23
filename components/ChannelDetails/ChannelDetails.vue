<template>
  <Teleport to="#teleports">
    <div class="channel-details">
      <header class="channel-details__header">
        <DefaultBack class="channel-details__header-back" />
        <DefaultButton class="channel-details__header-button">
          Изменить
        </DefaultButton>
      </header>
      <div class="channel-details__content">
        <NuxtImg class="channel-details__content-image" :src="image" />
        <h2 class="channel-details__content-title">{{ title }}</h2>
        <section class="channel-details__content-block">
          <h3 class="channel-details__content-block--title">
            Основная информация
          </h3>
          <table class="channel-details__content-block--table">
            <tr>
              <th>Категория</th>
              <td>{{ category }}</td>
            </tr>
            <tr>
              <th>Адрес</th>
              <td>{{ url }}</td>
            </tr>
          </table>
        </section>
        <section class="channel-details__content-block">
          <h3 class="channel-details__content-block--title">Рекламные слоты</h3>
          <table
            v-for="(date, index) in dates"
            :key="index"
            class="channel-details__content-block--table channel-details__content-block--table-vertical"
          >
            <tr>
              <th colspan="3">{{ date.date }}</th>
            </tr>
            <tr v-for="(slot, slotIndex) in date.slots" :key="slotIndex">
              <td>{{ slot.time }}</td>
              <td>{{ slot.format }}</td>
              <td>{{ slot.price }}</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { IChannelDetailsProps } from "./ChannelDetails.types";

const props = defineProps<IChannelDetailsProps>();
</script>

<style scoped lang="scss" src="./ChannelDetails.scss"></style>
