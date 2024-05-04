import {defineStore} from 'pinia';
import ProfileService from '~/api/methods/profile/ProfileService';
import type { IProfileRequest } from '~/api/methods/profile/profile.types';

const TOKEN_NAME = 'profToken'

export const useProfileStore = defineStore('global/personal', () => {
  const profileService = new ProfileService();

  const token = useCookie(TOKEN_NAME, {
    secure: true
  })

  async function profile(data: IProfileRequest) {
    try {
      const response = await profileService.profile(data)
      if(!response) return;
      localStorage.setItem('userId', String(response.id))
    } catch (e) {
      console.log(e)
    }
  }

  return {
    token,
    profile
  }
})