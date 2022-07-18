/* eslint-disable no-unused-vars */

import type { ComponentPublicInstance, ExtractPropTypes, PropType } from 'vue'

import type { Style } from '@/types'

import effectProps from './effect.props'

export declare type EffectExpose = {
  clear: () => void
  drop: (type: EffectType) => void
  has: (type: EffectType) => boolean
  push: (type: EffectType, event?: MouseEvent) => void
  update: (id: string, type: EffectType, style?: Style) => void
}

export declare type EffectInstance = ComponentPublicInstance<
  EffectProps,
  EffectExpose
>

export declare type EffectProps = ExtractPropTypes<typeof effectProps>

export declare type EffectRecord = {
  id: string
  style: Style
  type: EffectType
}

export declare type EffectType = 'active' | 'disabled' | 'loading' | 'ripple'
