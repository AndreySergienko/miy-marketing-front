export interface INavItem {
  link: string;
  text: string;
}

export type TNavDirection = 'column'

export interface ISharedNavigationProps {
  direction: TNavDirection
}

export type TNavBurger = Record<TNavDirection, string>