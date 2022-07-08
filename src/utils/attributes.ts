import type { Dataset, Props } from '@/types/data'

export const resolveDataset = (props: Props): Dataset => {
  const dataset: Dataset = {}
  Object.entries(props).forEach(([key, value]) => {
    switch (typeof value) {
      case 'boolean': {
        if (value) {
          dataset[`data-${key}`] = ''
        }
        break
      }
      case 'number':
      case 'string': {
        dataset[`data-${key}`] = value
        break
      }
    }
  })
  return dataset
}

export const resolveUniqueId = (): string => {
  const now = Date.now()
  const random = Math.ceil(Math.random() * 1000)
  return `sam-${now}${random}`
}
