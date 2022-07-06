import type { Appearance } from '@/types/component'

export declare type DialogEmits = {
  (event: 'change', value: boolean): void
  (event: 'close', name: string): void
  (event: 'open', name: string): void
  (event: 'update:modelValue', value: boolean): void
}

export declare type DialogProps = {
  appearance?: Appearance
  icon?: string
  legend?: string
  modelValue: boolean
  name?: string
}
