import type { InjectionKey } from 'vue'
import type { Appearance } from '@/types/component'

export declare type FieldEmits = {
  (event: 'blur', name?: string): void
  (event: 'foucs', name?: string): void
}

export declare type FieldProps = {
  appearance?: Appearance
  legend: string
  name: string
}

declare type FieldProvideRecord = {
  onBlur: () => void
  onFocus: () => void
  updateStatus: (key: string, value: boolean) => void
}

export declare type FieldProvide = FieldProvideRecord | undefined

export const fieldProvide = Symbol() as InjectionKey<FieldProvide>
