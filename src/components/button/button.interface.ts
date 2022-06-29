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

export declare type ButtonProps = {
  appearance?: Appearance
  diode: boolean
  legend: string
  name: string
  status: ButtonStatus
  type: ButtonType
}

export declare type ButtonStatus = 'off' | 'on' | 'loading' | 'disabled'

export declare type ButtonType = 'button' | 'submit' | 'reset'
