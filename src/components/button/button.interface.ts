import type { Appearance, Style } from '@/types/component'

export declare type ButtonEffect = {
  id: string
  style: Style
  type: string
}

export declare type ButtonEmits = {
  change: (value: 'on' | 'off', name: string) => true
  click: (name: string) => true
}

export declare type ButtonMode = 'off' | 'on' | 'loading' | 'disabled'

export declare type ButtonProps = {
  appearance?: Appearance
  disabled: boolean
  legend: string
  name: string
  type: ButtonType
}

export declare type ButtonType = 'button' | 'submit' | 'reset'
