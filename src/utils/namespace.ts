declare type Bem = {
  block: string
  element?: string
  modifier?: string
}

export default class Namespace {
  block: string = 'sam'
  element: string = ''
  history: Bem[] = []
  name: string = ''

  constructor (element: string) {
    this.element = element
    this.name = this.resolveBem(element)
  }

  bem (modifiers: string[], offspring?: string): string {
    const element = this.resolveElement(offspring)
    const results: string[] = [this.resolveBem(element)]

    modifiers.forEach(modifier => {
      results.push(this.resolveBem(element, modifier))
    })

    return results.join(' ')
  }

  resolveBem(element: string, modifier?: string): string {
    const name = `${this.block}-${element}`
    this.updateHistory(element, modifier)
    return modifier ? `${name}--${modifier}` : name
  }

  resolveElement (offspring?: string): string {
    const chain = [this.element]
    offspring && chain.push(offspring)
    return chain.join('-')
  }

  updateHistory (element: string, modifier?: string): void {
    this.history.push({
      block: this.block,
      element,
      modifier
    })
  }
}
