import Card from '../components/Card.jsx'
import { loadFromStorage } from '../utils/storage.js'
import { computeEmissions, getRecommendationList } from '../utils/calculations.js'

export default function Recommendations() {
  const stored = loadFromStorage()
  const inputs = stored || { car: 20, bus: 10, train: 5, electricity: 220, food: 'mixed', flights: 1 }
  const emissions = computeEmissions(inputs)
  const recommendations = getRecommendationList(emissions.total)

  return (
    <div className="space-y-10">
      <Card title="Personalized recommendations" subtitle="Steps you can take today to lower your footprint.">
        <p className="text-slate-300">Your monthly emissions are estimated from the activity profile saved in your browser. These suggestions dynamically adapt to your current impact.</p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {recommendations.map((note, idx) => (
          <Card key={idx} className="rounded-[2rem]" title={`Step ${idx + 1}`} subtitle={note}>
            <p className="text-slate-300">{note}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Travel smarter" subtitle="Reduce transport emissions.">
          <p className="text-slate-300">Use bus, train, and bike routes for short commute trips whenever possible.</p>
        </Card>
        <Card title="Energy efficiency" subtitle="Lower your electricity load.">
          <p className="text-slate-300">Turn off unused appliances, install efficient lighting, and set thermostats carefully.</p>
        </Card>
        <Card title="Food choices" subtitle="Eat more sustainably.">
          <p className="text-slate-300">Choose plant-centered meals and balance meat consumption with seasonal vegetables.</p>
        </Card>
      </div>
    </div>
  )
}
