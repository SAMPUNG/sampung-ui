export declare type Item = HTMLLIElement | null | undefined
export declare type Items = NodeListOf<HTMLLIElement> | null | undefined
export declare type List = HTMLUListElement | null

export declare type MenuOption = {
  children?: MenuOption[]
  icon?: string
  legend: string
  name: MenuValue
  path?: string
  target?: '_self' | '_blank'
}

export declare type MenuOptionRecord = MenuOption

export declare type MenuValue = symbol | string | null | undefined
