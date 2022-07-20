import type { I18n } from './base'

export declare type Appearance = 'dashed' | 'fill' | 'legacy' | 'outline'

export declare type Container = 'parent' | 'body'

export declare type Direction = 'horizontal' | 'vertical'

export declare type Legend = I18n | string

export declare type RichText = {
  author?: string
  content?: string
  date?: string
  icon?: string
  legend?: Legend
  name: string
  poster?: string
  url?: string
}

export declare type Palette =
  | 'error'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'

export declare type Theme = 'dark' | 'light'
