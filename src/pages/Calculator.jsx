import { useMemo, useState } from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import { computeEmissions, defaultInputs, getBadge, getCarbonScore, getRating, createMonthlyHistory } from '../utils/calculations.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export default function Calculator() {
  const [inputs, setInputs] = useLocalStorage(defaultInputs)
  const [saving, setSaving] = useState(false)
  const [errors, setErrors] = useState({})

  const emissions = useMemo(() => computeEmissions(inputs), [inputs])
  const badge = getBadge(emissions.total)
  const score = getCarbonScore(emissions.total)
  const rating = getRating(emissions.total)
  const history = useMemo(() => createMonthlyHistory(emissions.total), [emissions.total])

  const validateField = (field, value) => {
    let error = ''

    if (field === 'food') {
      if (!value) {
        error = 'Please select a food preference.'
      }
    } else {
      if (value === '' || Number.isNaN(Number(value)) || Number(value) < 0) {
        error = 'Enter a valid non-negative number.'
      }
    }

    setErrors((prev) => ({ ...prev, [field]: error }))
    return error
  }

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setInputs((prev) => ({ ...prev, [field]: value }))
    validateField(field, value)
  }

  const handleSave = () => {
    const nextErrors = {}
    const fields = ['car', 'bus', 'train', 'electricity', 'flights', 'food']

    fields.forEach((name) => {
      const error = validateField(name, inputs[name])
      if (error) nextErrors[name] = error
    })

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    setSaving(true)
    window.setTimeout(() => {
      setSaving(false)
    }, 900)
  }

  const fields = [
    { label: 'Daily car travel (km)', name: 'car', type: 'number' },
    { label: 'Daily bus travel (km)', name: 'bus', type: 'number' },
    { label: 'Daily train travel (km)', name: 'train', type: 'number' },
    { label: 'Monthly electricity (kWh)', name: 'electricity', type: 'number' },
    { label: 'Flights per year', name: 'flights', type: 'number' },
  ]

  return (
    <div className="space-y-10">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_0.95fr]">
        <div className="glass-card rounded-[2rem] border-white/10 p-8 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Carbon Calculator</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Estimate your monthly footprint.</h1>
          <p className="mt-3 text-slate-300">Fill in your activity patterns and receive a comprehensive carbon breakdown.</p>

          <div className="mt-8 grid gap-5">
            {fields.map((field) => (
              <label key={field.name} className="grid gap-2 text-sm text-slate-200">
                <span>{field.label}</span>
                <input
                  type={field.type}
                  value={inputs[field.name]}
                  onChange={handleChange(field.name)}
                  className={`rounded-3xl border px-4 py-3 text-white outline-none transition focus:border-accent/70 bg-slate-950/80 ${errors[field.name] ? 'border-rose-500/80' : 'border-white/10'}`}
                  min="0"
                  step="0.1"
                  aria-invalid={Boolean(errors[field.name])}
                />
                {errors[field.name] && <p className="text-xs text-rose-300">{errors[field.name]}</p>}
              </label>
            ))}

            <label className="grid gap-2 text-sm text-slate-200">
              <span>Food type</span>
              <select
                value={inputs.food}
                onChange={handleChange('food')}
                className={`rounded-3xl border px-4 py-3 text-white outline-none transition focus:border-accent/70 bg-slate-950/80 ${errors.food ? 'border-rose-500/80' : 'border-white/10'}`}
                aria-invalid={Boolean(errors.food)}
              >
                <option value="vegetarian">Vegetarian</option>
                <option value="mixed">Mixed</option>
                <option value="nonVegetarian">Non-Vegetarian</option>
              </select>
              {errors.food && <p className="text-xs text-rose-300">{errors.food}</p>}
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-400">Carbon Score</p>
              <p className="mt-2 text-3xl font-semibold text-white">{score}</p>
            </div>
            <Button onClick={handleSave} className="rounded-full px-8 py-3" type="button">
              {saving ? 'Saving...' : 'Save inputs'}
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card title="Summary" subtitle="See your monthly footprint at a glance.">
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Total Emissions</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{Math.round(emissions.total)} kg</p>
                </div>
                <div className="rounded-3xl bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Rating</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{rating}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">Achievement</p>
                <p className="mt-3 text-2xl font-semibold text-accent">{badge}</p>
              </div>
            </div>
          </Card>

          <Card title="One-month outlook">
            <div className="space-y-4">
              {Object.entries(emissions).map(([key, value]) =>
                key !== 'total' ? (
                  <div key={key} className="flex items-center justify-between rounded-3xl bg-slate-900/60 px-4 py-3">
                    <span className="text-sm text-slate-300 capitalize">{key}</span>
                    <span className="font-semibold text-white">{Math.round(value)} kg</span>
                  </div>
                ) : null,
              )}
            </div>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card title="Carbon journey" subtitle="Track how your footprint could trend over recent months.">
          <div className="flex items-center justify-between rounded-3xl bg-slate-900/60 p-4">
            <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Last 6 months</span>
            <span className="font-semibold text-white">Stable</span>
          </div>
        </Card>

        <Card title="Top focus areas">
          <ul className="space-y-3 text-slate-300">
            <li>• Car use is the leading source of emissions.</li>
            <li>• Electricity contributes one quarter of your footprint.</li>
            <li>• A plant-forward diet reduces monthly impact.</li>
          </ul>
        </Card>

        <Card title="Ready to take action?">
          <p className="text-slate-300">Head to the Recommendations page for tailored eco-friendly steps and next-level sustainability goals.</p>
        </Card>
      </div>
    </div>
  )
}
