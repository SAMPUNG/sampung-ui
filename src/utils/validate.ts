export const validateEmpty = (value: unknown): boolean => {
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

export const validateRegular = (value: unknown): boolean => {
  const type = typeof value
  const regular = ['string', 'number', 'boolean', 'undefined']
  return regular.includes(type)
}

export const validateUnassigned = (value: unknown): boolean => {
  return value === undefined || value === null
}
