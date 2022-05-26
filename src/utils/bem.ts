const block = 'sam' as string

const bem = (element: string, modifier?: string): string => {
  const base = `${block}-${element}`
  const results = [base]
  if (modifier) {
    results.push(`${base}--${modifier}`)
  }
  return results.join(' ')
}

export default bem
export { bem }
