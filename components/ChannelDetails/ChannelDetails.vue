<template>
    <div class="channel-details">
      <header class="channel-details__header">
        <!-- <DefaultBack
          class="channel-details__header-back"
          @click="$emit('close')"
        /> -->
        <DefaultButton
          class="channel-details__header-button"
          @click="handleEdit"
        >
          Изменить
        </DefaultButton>
      </header>
      <div class="channel-details__content">
        <nuxt-icon v-if="tdActions" class="modal__close" name="close" filled @click="$emit('close')" :style="{ fontSize: '36px', position: 'absolute', top: '20px', right: '20px' }" />
        <NuxtImg class="channel-details__content-image" :src="image || '/tg.png'"/>
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
              <td>
                <NuxtLink :to="formattedUrl" external target="_blank">
                  {{ url }}
                </NuxtLink>
              </td>
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
              <td>{{ slot.interval }}</td>
              <td>{{ slot.price }}</td>
              <td v-if="tdActions">
                <slot name="tdActions" :slotId="slot.id" :dateIdx="index" />
              </td>
            </tr>
          </table>
        </section>
        <footer class="channel-details__content-footer">
         <slot name="actions" :handle-edit="handleEdit" />
        </footer>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { IChannelDetailsProps } from "./ChannelDetails.types";

const props = defineProps<IChannelDetailsProps>();
const { id, url } = toRefs(props);

interface IChannelDetailsEmits {
  (e: 'close'): void;
}

const emit = defineEmits<IChannelDetailsEmits>()

const formattedUrl = computed(() => `https://t.me/${url.value.slice(1)}`);
const handleEdit = () => navigateTo(`/personal/telegram/edit/${id.value}`);
</script>

<style scoped lang="scss" src="./ChannelDetails.scss"></style>
