export const resolveUnassigned = (value: unknown): boolean => {
  return value === undefined || value === null
}

export const resolveUniqueId = () => {
  const now = Date.now()
  const random = Math.ceil(Math.random() * 1000)
  return `sam-${now}${random}`
}

export const verifyEmpty = (value: unknown): boolean => {
  switch (typeof value) {
    case 'number': {
      return value === 0
    }
    case 'object': {
      if (value === null) {
        return true
      } else if (Array.isArray(value)) {
        return value.length === 0
      } else {
        return Object.keys(value).length === 0
      }
    }
    case 'string': {
      return value === ''
    }
    case 'undefined': {
      return true
    }
    default: {
      return false
    }
  }
}

export const verifyRegular = (value: unknown): boolean => {
  const type = typeof value
  const regular = ['string', 'number', 'boolean', 'undefined']
  return regular.includes(type)
}
