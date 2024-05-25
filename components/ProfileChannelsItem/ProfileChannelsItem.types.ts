export enum EProfileChannelsItemTypes {
  AVAILABLE = "available",
  MODERATING = "moderating",
  DONE = "done",
  REJECTED = "rejected",
}
export const API_ITEM_TYPES = {
  1: EProfileChannelsItemTypes.MODERATING,
  2: EProfileChannelsItemTypes.MODERATING,
  3: EProfileChannelsItemTypes.AVAILABLE,
  4: EProfileChannelsItemTypes.DONE,
  5: EProfileChannelsItemTypes.REJECTED,
  6: EProfileChannelsItemTypes.MODERATING,
};

export interface IProfileChannelsItemProps {
  title: string;
  status: EProfileChannelsItemTypes;
  statusTooltip?: string;
}

export interface IProfileChannelsItemEmits {
  (e: "edit"): void;
  (e: "retry"): void;
  (e: "delete"): void;
}
