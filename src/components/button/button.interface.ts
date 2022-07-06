import type { Appearance, Palette, Style } from '@/types/component'

export declare type ButtonEffect = {
  id: string
  style: Style
  type: string
}

export declare type ButtonEmits = {
  change: (value: ButtonStatus, name: string) => true
  click: (name: string) => true
  'update:status': (value: ButtonStatus, name: string) => true
}

export declare type ButtonProps = {
  appearance?: Appearance
  legend: string
  name: string
  palette: Palette
  status: ButtonStatus
  type: ButtonType
}

export declare type ButtonStatus = 'active' | 'disabled' | 'loading' | 'none'

export declare type ButtonType = 'button' | 'reset' | 'submit'
