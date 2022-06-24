import type { AbsolutePosition, AbsolutePositionStyle } from '@/types/component'

export const absolute = (data: AbsolutePosition): AbsolutePositionStyle => {
  const result: AbsolutePositionStyle = {
    position: 'absolute',
  }

  return result
}
