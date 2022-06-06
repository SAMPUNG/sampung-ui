export const resolveUnassigned = (value: unknown): boolean => {
  return value === undefined || value === null
}

export const verifyRegular = (value: unknown): boolean => {
  const type = typeof value
  const regular =  ['string', 'number', 'boolean', 'undefined']
  return regular.includes(type)
}
