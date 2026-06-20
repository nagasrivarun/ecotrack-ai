import { computeEmissions, getCarbonScore, getRating, getBadge, getRecommendationList } from '../utils/calculations.js'

describe('Calculation utilities', () => {
  it('computes emissions correctly for sample inputs', () => {
    const result = computeEmissions({ car: '10', bus: '5', train: '2', electricity: '100', food: 'mixed', flights: '1' })
    expect(result.car).toBeCloseTo(63)
    expect(result.bus).toBeCloseTo(12)
    expect(result.train).toBeCloseTo(2.4)
    expect(result.electricity).toBeCloseTo(85)
    expect(result.food).toBe(100)
    expect(result.flights).toBe(250)
    expect(result.total).toBeCloseTo(512.4)
  })

  it('handles zero inputs without negative values', () => {
    const zeroResult = computeEmissions({ car: '0', bus: '0', train: '0', electricity: '0', food: 'vegetarian', flights: '0' })
    expect(zeroResult.total).toBe(50)
    expect(getCarbonScore(zeroResult.total)).toBe(92)
    expect(getRating(zeroResult.total)).toBe('Excellent')
    expect(getBadge(zeroResult.total)).toBe('Earth Protector')
  })

  it('assigns rating and badge correctly across thresholds', () => {
    expect(getRating(250)).toBe('Excellent')
    expect(getBadge(250)).toBe('Earth Protector')
    expect(getRating(450)).toBe('Good')
    expect(getBadge(450)).toBe('Green Warrior')
    expect(getRating(650)).toBe('Average')
    expect(getBadge(650)).toBe('Carbon Saver')
    expect(getRating(950)).toBe('Needs Improvement')
    expect(getBadge(950)).toBe('Eco Starter')
    expect(getRating(1200)).toBe('High Impact')
    expect(getBadge(1200)).toBe('Eco Starter')
  })

  it('returns relevant recommendations for high impact totals', () => {
    const recs = getRecommendationList(1200)
    expect(recs).toEqual(expect.arrayContaining(['Limit flights and prefer video conferencing', 'Install smart home energy monitoring', 'Try a weekly meat-free challenge']))
  })

  it('returns base recommendations for low impact totals', () => {
    const recs = getRecommendationList(250)
    expect(recs).toEqual(expect.arrayContaining(['Maintain your healthy sustainability habits', 'Share your progress with friends and family']))
  })
})
