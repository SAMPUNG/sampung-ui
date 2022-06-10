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
