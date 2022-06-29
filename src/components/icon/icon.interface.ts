import type { Appearance, Palette } from '@/types/component'

export declare type IconEmits = {
  click: (name: string) => true
}

export declare type IconProps = {
  appearance?: Appearance
  name: string
  palette?: Palette
}
