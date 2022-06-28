import type { Appearance, Style } from '@/types/component'

export declare type ButtonEffect = {
  id: string
  style: Style
  type: string
}

export declare type ButtonEmits = {
  (event: 'blur', name?: string): void
  (event: 'foucs', name?: string): void
}

export declare type ButtonProps = {
  appearance?: Appearance
  legend: string
  name: string
  type: ButtonType
}

export declare type ButtonType = 'button' | 'submit' | 'reset'
