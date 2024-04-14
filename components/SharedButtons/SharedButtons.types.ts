export type TColorBtn = 'blue' | 'white'
export type TSizeBtn = 'l' | 'm' | 's'


export interface ISharedButtonProps {
  size: TSizeBtn;
  color: TColorBtn;
}

export type TButtonColorClass = Record<TColorBtn, string>
export type TButtonSizeClass = Record<TSizeBtn, string>