import type { Dataset, I18n, Props } from '@/types/'

import { block } from './namespace'

export const resolveDataset = (
  props: Props,
  target: string[] = []
): Dataset => {
  const dataset: Dataset = {}
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

export const resolveDichotomy = (value: string | string[]): Dataset => {
  const dataset: Dataset = {}

  if (typeof value === 'string') {
    dataset[`data-${value}`] = ''
    return dataset
  }

  value.forEach((item) => {
    dataset[`data-${item}`] = ''
  })

  return dataset
}

export const resolveI18n = (i18n: I18n): Dataset => {
  const dataset: Dataset = {}

  Object.entries(i18n).forEach(([key, value]) => {
    dataset[`data-i18n-${key}`] = value
  })

  return dataset
}

export const resolveUniqueId = (): string => {
  const now = Date.now()
  const random = Math.ceil(Math.random() * 1000)
  return `${block}-${now}${random}`
}
