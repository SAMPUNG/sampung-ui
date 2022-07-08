import { describe, expect, it } from 'vitest'
import { resolveDataset, resolveUniqueId } from '@/utils/attributes'

describe('Resolve unique ID', () => {
  it('Get ID', () => {
    expect(typeof resolveUniqueId()).toBe('string')
  })

  it('Validate whether unique', () => {
    expect(resolveUniqueId() === resolveUniqueId()).toBe(false)
  })
})

describe('Resolve Dateset', () => {
  const dataset = resolveDataset({
    disabled: false,
    legend: 'Legend',
    limit: 10,
    offset: 0,
    readonly: true,
    total: 26,
    success: () => true,
  })

  it('Get type of dataset', () => {
    expect(typeof dataset).toBe('object')
  })

  it('Get length of keys of dataset', () => {
    expect(Object.keys(dataset).length).toBe(5)
  })

  it('Get disabled of dataset', () => {
    expect(dataset['data-disabled']).toBe(undefined)
  })

  it('Get legend of dataset', () => {
    expect(dataset['data-legend']).toBe('Legend')
  })

  it('Get limit of dataset', () => {
    expect(dataset['data-limit']).toBe(10)
  })

  it('Get offset of dataset', () => {
    expect(dataset['data-offset']).toBe(0)
  })

  it('Get readonly of dataset', () => {
    expect(dataset['data-readonly']).toBe('')
  })

  it('Get total of dataset', () => {
    expect(dataset['data-total']).toBe(26)
  })
  it('Get success of dataset', () => {
    expect(dataset['data-success']).toBe(undefined)
  })
})
