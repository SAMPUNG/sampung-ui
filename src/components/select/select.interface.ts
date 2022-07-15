import type { OptionName, OptionRecord } from '../options/options.interface'

export declare type SelectOption = OptionRecord

export declare type SelectType =
  | 'boolean'
  | 'color'
  | 'date'
  | 'datetime'
  | 'day'
  | 'hexagram'
  | 'hour'
  | 'month'
  | 'number'
  | 'pentagram'
  | 'poly'
  | 'quarter'
  | 'text'
  | 'trisect'
  | 'time'
  | 'year'

export declare type SelectValue = OptionName
