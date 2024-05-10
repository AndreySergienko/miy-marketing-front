export interface ITopMenuProps {
  title: string;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

export interface ITopMenuEmits {
  (e: "prev"): void;
  (e: "next"): void;
}
