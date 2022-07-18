import type { Dataset, Props } from '@/types/'

import { block } from './namespace'

export const resolveDataset = (
  props: Props,
  target: string[] = []
): Dataset => {
  const dataset: Dataset = { i18n: true }
  const parseDataset = (key: string) => {
    const value = props[key]
    switch (typeof value) {
      case 'boolean': {
        if (value) {
          dataset[`data-${key}`] = ''
        }
        break
      }
      case 'number':
      case 'string': {
        if (value) {
          dataset[`data-${key}`] = value
        }
        break
      }
    }
  }

  if (target.length) {
    target.forEach(parseDataset)
  } else {
    Object.keys(props).forEach(parseDataset)
  }
  return dataset
}

export const resolveI18n = (props: Props): Dataset =>
  resolveDataset(Object.assign({ i18n: true }, props))

export const resolveUniqueId = (): string => {
  const now = Date.now()
  const random = Math.ceil(Math.random() * 1000)
  return `${block}-${now}${random}`
}
