export type TColorBtn = 'blue' | 'white' | 'gray'
export type TSizeBtn = 'l' | 'm' | 's' | 'xl' | 'xs'


export interface ISharedButtonProps {
  size?: TSizeBtn;
  color: TColorBtn;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface ISharedButtonEmits {
  (event: 'click'): void
}

export type TButtonColorClass = Record<TColorBtn, string>
export type TButtonSizeClass = Record<TSizeBtn, string>
