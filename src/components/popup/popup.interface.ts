/* eslint-disable no-unused-vars */
import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import type { Container } from '@/types'

import popupProps from './popup.props'

export declare type PopupBounds = {
  bottom: PopupVertical
  inset: PopupInset
  left: PopupHorizontal
  name: PopupPosition
  right: PopupHorizontal
  top: PopupVertical
}

export declare type PopupContainer = Container | string

export declare type PopupExpose = {
  close: () => void
  el: HTMLDivElement
  open: () => void
  toggle: (value?: boolean) => void
}

export declare type PopupHorizontal = 'center' | 'left' | 'none' | 'right'

export declare type PopupInset = 'bottom' | 'left' | 'none' | 'right' | 'top'

export declare type PopupInstance = ComponentPublicInstance<
  PopupProps,
  PopupExpose
>

export declare type PopupPosition =
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'
  | 'left'
  | 'left-bottom'
  | 'left-top'
  | 'middle'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top'
  | 'top-left'
  | 'top-right'

export declare type PopupProps = ExtractPropTypes<typeof popupProps>

export declare type PopupVertical = 'bottom' | 'middle' | 'none' | 'top'
