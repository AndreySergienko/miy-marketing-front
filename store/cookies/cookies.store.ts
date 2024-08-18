import { ref } from 'vue';

   export const useCookiesStore = () => {
     const cookiesAccepted = ref(localStorage.getItem('cookiesAccepted') === 'true');

     const acceptCookies = () => {
       cookiesAccepted.value = true;
       localStorage.setItem('cookiesAccepted', 'true');
     };

     return { cookiesAccepted, acceptCookies };
   };