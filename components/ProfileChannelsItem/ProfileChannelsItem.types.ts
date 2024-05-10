export enum EProfileChannelsItemTypes {
  AVAILABLE = "available",
  MODERATING = "moderating",
  DONE = "done",
  REJECTED = "rejected",
}

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
