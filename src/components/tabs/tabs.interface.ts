import type {
  SelectOptionRecord,
  SelectValue,
} from '../select/select.interface'

export declare type ControlPayload = Record<string, unknown>

export declare type IndicatorOffset = {
  transform: string
  width: string
}

export declare type TabsEmits = {
  (event: 'control', payload: ControlPayload): void
  (event: 'update:modelValue', value: string): void
}

export declare type TabsProps = {
  modelValue: TabsValue
  options: TabsOption[]
}

export declare type TabsOptionRecord = SelectOptionRecord

export declare type TabsOption = TabsValue[] | TabsOptionRecord[]

export declare type TabsValue = SelectValue
