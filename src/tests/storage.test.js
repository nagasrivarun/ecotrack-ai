import { saveToStorage, loadFromStorage, clearStorage } from '../utils/storage.js'

describe('storage utilities', () => {
  const sample = { car: 10, bus: 5, train: 3, electricity: 100, food: 'mixed', flights: 1 }

  beforeEach(() => {
    clearStorage()
  })

  it('saves and loads stored values correctly', () => {
    saveToStorage(sample)
    const loaded = loadFromStorage()
    expect(loaded).toEqual(sample)
  })

  it('returns null when storage is empty', () => {
    expect(loadFromStorage()).toBeNull()
  })
})
