import Card from '../components/Card.jsx'
import { loadFromStorage } from '../utils/storage.js'
import { computeEmissions, getBadge } from '../utils/calculations.js'

const badges = [
  {
    name: 'Eco Starter',
    description: 'First step toward sustainable living.',
    threshold: '800+ kg',
    icon: '🌱',
  },
  {
    name: 'Carbon Saver',
    description: 'Lower your footprint with smarter choices.',
    threshold: '500-799 kg',
    icon: '🚴',
  },
  {
    name: 'Green Warrior',
    description: 'Consistently strong eco habits.',
    threshold: '300-499 kg',
    icon: '🔋',
  },
  {
    name: 'Earth Protector',
    description: 'Exceptional environmental leadership.',
    threshold: '< 300 kg',
    icon: '🌍',
  },
]

export default function Achievements() {
  const stored = loadFromStorage()
  const inputs = stored || { car: 20, bus: 10, train: 5, electricity: 220, food: 'mixed', flights: 1 }
  const currentTotal = computeEmissions(inputs).total
  const currentBadge = getBadge(currentTotal)

  return (
    <div className="space-y-10">
      <Card title="Achievement wall" subtitle="Earn badges as your carbon footprint improves.">
        <p className="text-slate-300">Your current impact places you at <span className="font-semibold text-white">{currentBadge}</span>.</p>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.name} className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-glass text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-accent/15 to-sky-400/15 text-4xl">
              {badge.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{badge.name}</h3>
            <p className="mt-3 text-sm text-slate-400">{badge.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-500">{badge.threshold}</p>
          </div>
        ))}
      </div>

      <Card title="Your current badge" subtitle={currentBadge}>
        <p className="text-slate-300">Keep refining your routine to unlock the next level and reduce your footprint further.</p>
      </Card>
    </div>
  )
}
