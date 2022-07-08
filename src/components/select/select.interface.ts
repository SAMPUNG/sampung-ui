export declare type Item = HTMLLIElement | null | undefined
export declare type Items = NodeListOf<HTMLLIElement> | null | undefined
export declare type List = HTMLUListElement | null

export declare type SelectOptionRecord = {
  icon?: string
  legend: string
  name: SelectValue
}

export declare type SelectOption = SelectValue | SelectOptionRecord

export declare type SelectValue = string | number | boolean | undefined
