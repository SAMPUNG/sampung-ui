import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import buttonProps from './button.props'

export declare type ButtonEffect =
  | 'active'
  | 'disabled'
  | 'dropdown'
  | 'loading'
  | 'none'
  | 'ripple'

export declare type ButtonExpose = {
  click: () => void
  el: HTMLButtonElement
  toggle: () => void
}

export declare type ButtonInstance = ComponentPublicInstance<
  ButtonProps,
  ButtonExpose
>

export declare type ButtonMode =
  | 'diode'
  | 'disabled'
  | 'knob'
  | 'loading'
  | 'normal'
  | 'switch'

export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>

export declare type ButtonType = 'button' | 'reset' | 'submit'
