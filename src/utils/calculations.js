const FOOTPRINT_FACTORS = {
  car: 0.21,
  bus: 0.08,
  train: 0.04,
  electricity: 0.85,
  flight: 250,
}

const FOOD_EMISSIONS = {
  vegetarian: 50,
  mixed: 100,
  nonVegetarian: 200,
}

export const defaultInputs = {
  car: 25,
  bus: 15,
  train: 10,
  electricity: 250,
  food: 'mixed',
  flights: 2,
}

export function computeEmissions(inputs) {
  const car = Number(inputs.car) * FOOTPRINT_FACTORS.car * 30
  const bus = Number(inputs.bus) * FOOTPRINT_FACTORS.bus * 30
  const train = Number(inputs.train) * FOOTPRINT_FACTORS.train * 30
  const electricity = Number(inputs.electricity) * FOOTPRINT_FACTORS.electricity
  const food = FOOD_EMISSIONS[inputs.food] || FOOD_EMISSIONS.mixed
  const flights = Number(inputs.flights) * FOOTPRINT_FACTORS.flight
  const total = car + bus + train + electricity + food + flights

  return {
    car,
    bus,
    train,
    electricity,
    food,
    flights,
    total,
  }
}

export function getCarbonScore(total) {
  if (total < 300) return 92
  if (total < 500) return 78
  if (total < 800) return 62
  if (total < 1100) return 48
  return 32
}

export function getRating(total) {
  if (total < 300) return 'Excellent'
  if (total < 500) return 'Good'
  if (total < 800) return 'Average'
  if (total < 1100) return 'Needs Improvement'
  return 'High Impact'
}

export function getBadge(total) {
  if (total < 300) return 'Earth Protector'
  if (total < 500) return 'Green Warrior'
  if (total < 800) return 'Carbon Saver'
  return 'Eco Starter'
}

export function getRecommendationList(total) {
  const base = [
    'Switch to public transport for short trips',
    'Replace incandescent bulbs with LEDs',
    'Choose local and seasonal foods when possible',
  ]

  if (total >= 1100) {
    return [
      'Limit flights and prefer video conferencing',
      'Install smart home energy monitoring',
      'Try a weekly meat-free challenge',
      ...base,
    ]
  }
  if (total >= 800) {
    return [
      'Review monthly electricity usage and optimize heating',
      'Carpool or use electric mobility options',
      'Plan meals around more plant-based dishes',
      ...base,
    ]
  }
  if (total >= 500) {
    return [
      'Reduce car travel by combining errands',
      'Swap a flight for a train trip if possible',
      'Upgrade to energy-efficient appliances',
      ...base,
    ]
  }
  return [
    'Maintain your healthy sustainability habits',
    'Share your progress with friends and family',
    'Support brands with strong climate commitments',
    ...base,
  ]
}

export function createMonthlyHistory(total) {
  return Array.from({ length: 6 }, (_, idx) => {
    const variance = total * (0.8 + idx * 0.05)
    return {
      month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][idx],
      value: Math.round(variance),
    }
  })
}
