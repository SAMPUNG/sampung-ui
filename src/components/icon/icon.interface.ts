import type { Appearance, Palette } from '@/types/component'

export declare type IconEmits = {
  click: (name: string) => true
}
export declare type IconProps = {
  appearance?: Appearance
  name: string
  palette?: Palette
}

export declare type IconRecord = {
  code: number
  name: string
}

export declare type IconRecordsMap = Record<string, IconRecord[]>
