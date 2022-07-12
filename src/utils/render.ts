import { Slots } from 'vue'

export const renderSlot = (slots: Slots, name: string = 'default') => {
  return typeof slots[name] === 'function' ? slots[name]?() : ''
}
