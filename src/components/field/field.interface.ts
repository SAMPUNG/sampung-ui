/* eslint-disable no-unused-vars */

import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'

import type { InputValue } from '@/components/input/input.interface'

import fieldProps from './field.props'

export declare type FieldExpose = {
  blur: () => void
  clear: () => void
  focus: () => void
  validate: (value: InputValue) => void
}

export declare type FieldInstance = ComponentPublicInstance<
  FieldProps,
  FieldExpose
>

export declare type FieldProps = ExtractPropTypes<typeof fieldProps>

export declare type FieldProvide = FieldExpose | undefined

export declare type FieldStatus = {
  focus: boolean
  empty: boolean
  valid: boolean
  waiting: boolean
}
