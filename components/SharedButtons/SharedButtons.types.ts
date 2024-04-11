export type TColorBtn = 'blue' | 'white' | 'blueBold'


export interface ISharedButtonProps {
  color: TColorBtn;
}

type TButtonColorClass = Record<TColorBtn, string>

export const buttonColor: TButtonColorClass = {
  white: 'btn__white',
  blue: 'btn__blue',
  blueBold: 'btn__blue-bold'
}