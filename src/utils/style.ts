import { computed, ComputedRef } from 'vue'

import type { Absolute, Block, Location, Property, Props } from '@/types/'

export const absolute = (data?: Location): Absolute => {
  const result: Absolute = {
    position: 'absolute',
  }

  if (data === undefined) {
    result.bottom = 0
    result.left = 0
    result.right = 0
    result.top = 0
  } else {
    result.bottom = resolvePosition(data.bottom)
    result.left = resolvePosition(data.left)
    result.right = resolvePosition(data.right)
    result.top = resolvePosition(data.top)
  }

  return result
}

const resolvePosition = (value: Property): Property =>
  typeof value === 'number' ? `${value}px` : value

export const useBlock = (props: Props): ComputedRef<Block> => {
  return computed<Block>(() => ({
    display: props.inline ? 'inline-block' : 'block',
    width: props.inline ? undefined : '100%',
  }))
}
