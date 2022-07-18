/* eslint-disable no-unused-vars */

import type {
  SelectOption,
  SelectValue,
} from '@/components/select/select.interface'

export declare type DropdownPosition = 'above' | 'after' | 'before' | 'below'

export declare type DropdownProps = {
  modelValue: DropdownValue
  options: DropdownOption[]
}

export declare type DropdownOptionRecord = SelectOption

export declare type DropdownOption = DropdownValue[] | DropdownOptionRecord[]

export declare type DropdownValue = SelectValue
