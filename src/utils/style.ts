import type { Absolute, Location, Property } from '@/types/component'

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
