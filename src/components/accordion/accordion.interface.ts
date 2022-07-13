/* eslint-disable no-unused-vars */

import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import accordionProps from './accordion.props'

export declare type AccordionExpose = {
  toggle: (value?: boolean) => void
}

export declare type AccordionInstance = ComponentPublicInstance<
  AccordionProps,
  AccordionExpose
>

export declare type AccordionProps = ExtractPropTypes<typeof accordionProps>
