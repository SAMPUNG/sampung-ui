import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import buttonProps from './button.props'

export declare type ButtonExpose = {
  onClick: () => void
}

export declare type ButtonMode =
  | 'diode'
  | 'disabled'
  | 'loading'
  | 'normal'
  | 'switch'

export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>

export declare type ButtonStatus = 'active' | 'disabled' | 'loading' | 'none'

export declare type ButtonType = 'button' | 'reset' | 'submit'

export declare type EffectInstance = ComponentPublicInstance<
  ButtonProps,
  ButtonExpose
>
