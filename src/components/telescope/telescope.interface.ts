/* eslint-disable no-unused-vars */

import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import telescopeProps from './telescope.props'

export declare type TelescopeExpose = {
  toggle: (value?: boolean) => void
}

export declare type TelescopeInstance = ComponentPublicInstance<
  TelescopeProps,
  TelescopeExpose
>

export declare type TelescopeProps = ExtractPropTypes<typeof telescopeProps>
