import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {IChannel} from "./channel.types";

export const useChannelStore = defineStore('global/channel', () => {
    /** Список каналов **/
    const channels = ref<IChannel[]>([])

    /** Получить список каналов **/
    async function getAll() {}

    /** Купить канал **/
    async function buy() {}

    /** Создать канал **/
    async function create() {}


    /** Обновить канал **/
    async function update() {}

    return {
        channels,
        update,
        buy,
        create,
        getAll
    }
});
