import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import affixProps from './affix.props'

export declare type AffixExpose = {
  name: string
}

export declare type AffixHorizontal = 'both' | 'left' | 'right'

export declare type AffixInstance = ComponentPublicInstance<
  AffixProps,
  AffixExpose
>

export declare type AffixProps = ExtractPropTypes<typeof affixProps>

export declare type AffixVertical = 'both' | 'bottom' | 'top'
