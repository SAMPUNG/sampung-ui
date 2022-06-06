import { describe, expect, it } from 'vitest'
import Namespace from '@/utils/namespace'

const sampung = new Namespace('sampung')

describe('Create Namespace', () => {

  it('Get block', () => {
    expect(sampung.block).toBe('sam')
  })

  it('Get element', () => {
    expect(sampung.element).toBe('sampung')
  })

  it('Get name', () => {
    expect(sampung.name).toBe('sam-sampung')
  })

  it('Get history', () => {
    expect(sampung.history).toHaveLength(1)

    const record = sampung.history[0]
    expect(record).toHaveProperty('block', 'sam')
    expect(record).toHaveProperty('element', 'sampung')
    expect(record).toHaveProperty('modifier', undefined)
  })

})


describe('Resolve Bem with ([test])', () => {

  it('Resolve Bem', () => {
    expect(sampung.bem(['test'])).toBe('sam-sampung sam-sampung--test')
  })

  it('Get history', () => {
    expect(sampung.history).toHaveLength(3)

    const record = sampung.history[2]
    expect(record).toHaveProperty('block', 'sam')
    expect(record).toHaveProperty('element', 'sampung')
    expect(record).toHaveProperty('modifier', 'test')
  })

})


describe('Resolve Bem with (button, [disabled])', () => {

  it('Resolve Bem', () => {
    expect(sampung.bem('button', ['disabled'])).toBe('sam-sampung-button sam-sampung-button--disabled')
  })

  it('Get history', () => {
    expect(sampung.history).toHaveLength(5)

    const record = sampung.history[4]
    expect(record).toHaveProperty('block', 'sam')
    expect(record).toHaveProperty('element', 'sampung-button')
    expect(record).toHaveProperty('modifier', 'disabled')
  })

})


describe('Resolve Bem with (button, [disabled, loading])', () => {

  it('Resolve Bem', () => {
    expect(sampung.bem('button', ['disabled', 'loading'])).toBe('sam-sampung-button sam-sampung-button--disabled sam-sampung-button--loading')
  })

  it('Get history', () => {
    expect(sampung.history).toHaveLength(8)

    const disabled = sampung.history[6]
    expect(disabled).toHaveProperty('block', 'sam')
    expect(disabled).toHaveProperty('element', 'sampung-button')
    expect(disabled).toHaveProperty('modifier', 'disabled')

    const loading = sampung.history[7]
    expect(loading).toHaveProperty('block', 'sam')
    expect(loading).toHaveProperty('element', 'sampung-button')
    expect(loading).toHaveProperty('modifier', 'loading')
  })

})


describe('Resolve Bem with (button)', () => {

  it('Resolve Bem', () => {
    expect(sampung.bem('button')).toBe('sam-sampung-button')
  })

  it('Get history', () => {
    expect(sampung.history).toHaveLength(9)

    const record = sampung.history[8]
    expect(record).toHaveProperty('block', 'sam')
    expect(record).toHaveProperty('element', 'sampung-button')
    expect(record).toHaveProperty('modifier', undefined)
  })

})
