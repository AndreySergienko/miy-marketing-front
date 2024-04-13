export type TColorBtn = 'blue' | 'white'
export type TSizeBtn = 'l' | 'm'


export interface ISharedButtonProps {
  size: TSizeBtn;
  color: TColorBtn;
}

type TButtonColorClass = Record<TColorBtn, string>

export const buttonColor: TButtonColorClass = {
  white: 'btn__white',
  blue: 'btn__blue',
}