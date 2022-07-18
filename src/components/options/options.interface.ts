import type { Flex } from '@/types'

export declare type OptionElement = HTMLLIElement | null

export declare type OptionList = HTMLUListElement | null

export declare type OptionName = string | number | boolean | undefined

export declare type OptionStyle = Flex | { display: 'block' }

export declare type OptionsPicked = OptionName[]

export declare type OptionRecord = {
  disabled?: boolean
  icon?: string
  legend?: string
  name: OptionName
}
