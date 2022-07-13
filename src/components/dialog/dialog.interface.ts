/* eslint-disable no-unused-vars */

import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import dialogProps from './dialog.props'

export declare type DialogExpose = {
  el: HTMLDialogElement
  toggle: (value?: boolean) => void
}

export declare type DialogInstance = ComponentPublicInstance<
  DialogProps,
  DialogExpose
>

export declare type DialogProps = ExtractPropTypes<typeof dialogProps>
