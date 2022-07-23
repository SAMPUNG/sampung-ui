export type LatheOption = {
  legend: string
  name: string
  type: string
  value: unknown
}

export type LatheSource = Record<string, string | number | boolean>

export type LatheTarget =
  | 'button'
  | 'checkbox'
  | 'dialog'
  | 'radio'
  | 'select'
  | 'tabs'
  | 'toggle'
