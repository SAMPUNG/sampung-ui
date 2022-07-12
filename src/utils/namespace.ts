import type { Bem } from '@/types/component'

export const block: string = 'sam'

export const createNamespace = (element: string) => {
  const resolveBem = (element: string, modifier?: string): string => {
    const name = `${block}-${element}`
    updateHistory(element, modifier)
    return modifier ? `${name}--${modifier}` : name
  }

  const resolveElement = (offspring?: string): string => {
    const chain = [element]
    offspring && chain.push(offspring)
    return chain.join('-')
  }

  const updateHistory = (element: string, modifier?: string): void => {
    history.push({
      block: block,
      element,
      modifier,
    })
  }
  const history: Bem[] = []
  const name: string = block + element

  function bem(): string
  function bem(offspring: string): string
  function bem(modifiers: string[]): string
  function bem(offspring: string, modifiers: string[]): string
  function bem(a?: string | string[], b?: string[]): string {
    const offspring = typeof a === 'string' ? a : undefined
    const modifiers = Array.isArray(a) ? a : b

    const element = resolveElement(offspring)
    const results: string[] = [resolveBem(element)]

    modifiers?.forEach((modifier) => {
      modifier && results.push(resolveBem(element, modifier))
    })

    return results.join(' ')
  }

  bem.prototype.block = block
  bem.prototype.name = name
  bem.prototype.history = history

  return bem
}

export default createNamespace
