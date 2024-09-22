export interface IMoreMenuProps {
  isActive: boolean;
}

export interface IMoreMenuEmits {
  (e: "edit"): void;
  (e: "delete"): void;
}
