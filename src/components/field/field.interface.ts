/* eslint-disable no-unused-vars */

import type { InjectionKey } from 'vue'

declare type FieldProvideRecord = {
  onBlur: () => void
  onFocus: () => void
  updateStatus: (key: 'empty' | 'focus', value: boolean) => void
}

export declare type FieldProvide = FieldProvideRecord | undefined

export const fieldProvide = Symbol() as InjectionKey<FieldProvide>
