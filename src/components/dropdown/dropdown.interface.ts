/* eslint-disable no-unused-vars */

import type {
  SelectOptionRecord,
  SelectValue,
} from '@/components/select/select.interface'

export declare type ControlPayload = Record<string, unknown>

export declare type DropdownProps = {
  modelValue: DropdownValue
  options: DropdownOption[]
}

export declare type DropdownOptionRecord = SelectOptionRecord

export declare type DropdownOption = DropdownValue[] | DropdownOptionRecord[]

export declare type DropdownValue = SelectValue
