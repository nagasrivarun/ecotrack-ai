import { useEffect, useMemo, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import Card from '../components/Card.jsx'
import Gauge from '../components/Gauge.jsx'
import CountUp from '../components/CountUp.jsx'
import LoadingSkeleton from '../components/LoadingSkeleton.jsx'
import { loadFromStorage } from '../utils/storage.js'
import { computeEmissions, getCarbonScore, getRating, createMonthlyHistory } from '../utils/calculations.js'

const COLORS = ['#22C55E', '#38BDF8', '#A78BFA', '#F59E0B', '#F97316']

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const stored = loadFromStorage()
  const inputs = stored || { car: 20, bus: 10, train: 5, electricity: 220, food: 'mixed', flights: 1 }
  const emissions = useMemo(() => computeEmissions(inputs), [inputs])
  const chartData = [
    { name: 'Car', value: Math.round(emissions.car) },
    { name: 'Bus', value: Math.round(emissions.bus) },
    { name: 'Train', value: Math.round(emissions.train) },
    { name: 'Electricity', value: Math.round(emissions.electricity) },
    { name: 'Food', value: Math.round(emissions.food) },
    { name: 'Flights', value: Math.round(emissions.flights) },
  ]
  const history = useMemo(() => createMonthlyHistory(emissions.total), [emissions.total])
  const score = getCarbonScore(emissions.total)
  const rating = getRating(emissions.total)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false)
    }, 400)

    return () => window.clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
        <LoadingSkeleton />
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Total footprint" subtitle="Your current monthly emissions estimate.">
          <CountUp value={Math.round(emissions.total)} suffix=" kg" className="text-5xl" />
          <p className="mt-3 text-slate-300">Based on inputs stored in your browser.</p>
        </Card>

        <Card title="Carbon score" subtitle="A visual sustainability gauge.">
          <Gauge value={score} label="Carbon score" />
          <p className="mt-3 text-center text-sm text-slate-300">Rating: {rating}</p>
        </Card>

        <Card title="Goal progress" subtitle="Emissions performance compared to last month.">
          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-900/60">
            <div className="h-full w-3/4 rounded-full bg-accent transition-all duration-500" />
          </div>
          <p className="mt-3 text-sm text-slate-400">75% of your monthly goal achieved</p>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card title="Emission sources" subtitle="Pie chart by category." className="h-[450px]">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie data={chartData} innerRadius={70} outerRadius={110} dataKey="value" stroke="none">
                {chartData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} kg`, 'Emissions']} contentStyle={{ background: '#020617', borderColor: '#334155', color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Monthly trend" subtitle="Simulated recent emissions history." className="h-[450px]">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={history} margin={{ top: 20, right: 0, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip contentStyle={{ background: '#020617', borderColor: '#334155', color: '#fff' }} />
              <Bar dataKey="value" fill="#22C55E" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Performance indicators" subtitle="Impact metrics for your emission categories.">
          <div className="space-y-5">
            {chartData.slice(0, 4).map((entry) => (
              <div key={entry.name} className="space-y-2 rounded-3xl bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">{entry.name}</p>
                  <p className="text-sm font-semibold text-white">
                    <CountUp value={entry.value} suffix=" kg" className="text-base" />
                  </p>
                </div>
                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(100, (entry.value / emissions.total) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Insights" subtitle="Actionable recommendations for better impact.">
          <ul className="space-y-4 text-slate-300">
            <li>• Car travel is the largest source. Consider alternative mobility.</li>
            <li>• Electricity and food are both strong levers for reduction.</li>
            <li>• Staying below 500 kg per month keeps your rating in the green zone.</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
