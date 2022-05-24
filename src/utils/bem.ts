const bem = (element: string, modifier?: string, block = 'sam'): string => {
  if (modifier) {
    return `${block}-${element}-${modifier}`
  }
  return `${block}-${element}`
}

export default bem
