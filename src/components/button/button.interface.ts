import type { Appearance, Palette, Style } from '@/types/component'

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
  legend: string
  name: string
  palette: Palette
  status: ButtonStatus
  type: ButtonType
}

export declare type ButtonStatus = 'loading' | 'disabled' | 'off' | 'on'

export declare type ButtonType = 'button' | 'reset' | 'submit'
