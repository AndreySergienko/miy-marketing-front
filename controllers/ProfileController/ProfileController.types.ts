import type { IProfileRequest } from "~/api/methods/profile/profile.types";

interface IProfileControllerExportData<ProfileMethod> {
  profileData: IProfileRequest;
  profileRules: object;
  sendProfile: ProfileMethod;
}

export interface IProfileControllerSlots<ProfileMethod> {
  (name: 'default', props: IProfileControllerExportData<ProfileMethod>): unknown
}