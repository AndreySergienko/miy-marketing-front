export type TColorBtn = 'blue' | 'white'


export interface ISharedButtonProps {
  color: TColorBtn;
}

type TButtonColorClass = Record<TColorBtn, string>

export const buttonColor: TButtonColorClass = {
  white: 'btn__white',
  blue: 'btn__blue'
}