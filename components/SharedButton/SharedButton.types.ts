export type TColorBtn = 'blue' | 'white' | 'gray'
export type TSizeBtn = 'l' | 'm' | 's' | 'ml'


export interface ISharedButtonProps {
  size: TSizeBtn;
  color: TColorBtn;
}

export type TButtonColorClass = Record<TColorBtn, string>
export type TButtonSizeClass = Record<TSizeBtn, string>