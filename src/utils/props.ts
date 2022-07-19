import type { PropType } from 'vue'

import type { Appearance, Legend, Palette } from '@/types/'

export declare type BasePropsDefaults = {
  appearance?: Appearance
  icon?: string
  legend?: Legend
  name?: string
  palette?: Palette
}

export const includesBaseProps = (defaults?: BasePropsDefaults) => ({
  appearance: {
    default: defaults?.appearance || 'outline',
    required: false,
    type: String as PropType<Appearance>,
  },
  icon: {
    default: defaults?.icon,
    required: false,
    type: String,
  },
  legend: {
    default: defaults?.legend,
    required: false,
    type: [String, Object] as PropType<Legend>,
  },
  name: {
    default: defaults?.name,
    required: false,
    type: String,
  },
  palette: {
    default: defaults?.palette || 'primary',
    required: false,
    type: String as PropType<Palette>,
  },
})
