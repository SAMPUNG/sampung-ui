export const resolveUnassigned = (value: unknown): boolean => {
  return value === undefined || value === null
}

export const resolveUniqueId = () => {
  const now = Date.now()
  const random = Math.ceil(Math.random() * 1000)
  return `sam-${now}${random}`
}

export const verifyRegular = (value: unknown): boolean => {
  const type = typeof value
  const regular = ['string', 'number', 'boolean', 'undefined']
  return regular.includes(type)
}
