import { IAccordItem } from "../../components/SharedAccordion/SharedAccordion.type";
import {ref} from 'vue'

export const accordList: IAccordItem[] = ref([
  {title:'Что означает уведомительный и автоматический порядок?', 
    text: 'При регистрации пользователь выбирает уведомительный или автоматический порядок. Если Вы выбрали уведомительный порядок, то при каждой заявке на рекламную интеграцию ТГ-бот платформы будет отправлять сообщение с информацией о потенциальной интеграции и Вам предстоит подтвердить или отклонить сделку исходя из критериев контента. В случае положительного ответа ТГ-бот опубликует рекламу. Если Вы выбрали автоматический порядок, то заявки на рекламные интеграции, которую будут поступать с нашей платформы будут модерироваться нашей командой исходя из ваших критериев, которые вы прописали при размещении ТГ-канала на платформу. В этом случае Вы должны проставить даты и всегда оставлять указанный/-е временной/-е слот/-ы и интервал для рекламных интеграций, поступающих с ON-Developer в календаре рекламных интеграций Вашего канала. ТГ-бот опубликует, удалит пост, а средства автоматически поступят на карту, которую вы привязали в личном кабинете. Обратите внимание, что вы не сможете разместить ТГ-канал на нашу платформу, пока вы не привязали карту. Мы заботимся о своей репутации и обеспечиваем гарантию, что средства от рекламодателя поступят паблишеру в случае положительной сделки. Также Вы не сможете разместить ТГ-канал на платформе, если его контент не соответствует действующему российскому законодательству или проблемы с законом у лица, которое его регистрирует.',
    isOpen:false},
  {title: 'sed do eiusmod tempor incididunt ut labore', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    isOpen: false},
  {title: 'uis nostrud exercitation ullamco labori', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    isOpen: false},
  {title: 'et dolore magna aliqua', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    isOpen:false},
  {title:'Ut enim ad minim veniam', 
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    isOpen:false},
  {title:'uis nostrud exercitation ullamco labori', 
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    isOpen:false}
])