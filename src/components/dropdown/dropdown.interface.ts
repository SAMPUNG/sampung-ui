import type {
  SelectOptionRecord,
  SelectValue,
} from '@/components/select/select.interface'

export declare type ControlPayload = Record<string, unknown>

export declare type DropdownEmits = {
  (event: 'control', payload: ControlPayload): void
  (event: 'update:modelValue', value: string): void
}

export declare type DropdownProps = {
  modelValue: DropdownValue
  options: DropdownOption[]
}

export declare type DropdownOptionRecord = SelectOptionRecord

export declare type DropdownOption = DropdownValue[] | DropdownOptionRecord[]

export declare type DropdownValue = SelectValue
