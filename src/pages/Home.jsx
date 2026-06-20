import { useState } from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CountUp from '../components/CountUp.jsx'

const features = [
  {
    title: 'Precision Carbon Calculator',
    description: 'Measure travel, energy, food, and flight emissions in one easy flow.',
  },
  {
    title: 'Smart Sustainability Insights',
    description: 'Get ratings, goals, and habit-based recommendations tailored to you.',
  },
  {
    title: 'Visual Growth Dashboard',
    description: 'Track your progress with charts, history, and eco-friendly milestones.',
  },
]

const statistics = [
  { label: 'Average household footprint', value: 560, suffix: ' kg' },
  { label: 'Global emissions saved daily', value: 12, suffix: ' Mt' },
  { label: 'Renewable adoption rate', value: 48, suffix: '%' },
]

const tips = [
  'Take shorter car trips and combine errands to reduce emissions.',
  'Swap incandescent bulbs for LEDs and turn off lights when not needed.',
  'Choose public transport, cycling, or walking for local journeys.',
  'Reduce meat intake by adding more plant-based meals each week.',
  'Adjust your thermostat by 1°C to lower energy use without losing comfort.',
]

export default function Home() {
  const [tipIndex, setTipIndex] = useState(0)
  const currentTip = tips[tipIndex]

  return (
    <section className="space-y-16">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">Awareness | Action | Impact</span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">EcoTrack AI helps you calculate, track, and reduce your carbon footprint.</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">Explore personalized climate insights, engage with interactive charts, and earn achievements so every decision feels greener.</p>
          <div className="flex flex-wrap gap-4">
            <Button to="/calculator">Start Calculating</Button>
            <Button to="/dashboard" className="bg-white/10 text-white hover:bg-white/20">View Dashboard</Button>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glass">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current Impact</p>
                <p className="mt-3 text-4xl font-semibold text-white">542 kg CO₂</p>
              </div>
              <div className="rounded-3xl bg-accent/10 px-4 py-3 text-accent">+12% this month</div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">Score</p>
                <p className="mt-2 text-2xl font-semibold text-white">78</p>
              </div>
              <div className="rounded-3xl bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">Rating</p>
                <p className="mt-2 text-2xl font-semibold text-white">Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} subtitle={feature.description} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {statistics.map((stat) => (
          <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">{stat.label}</p>
            <div className="mt-4 flex items-end gap-2">
              <CountUp value={stat.value} suffix={stat.suffix} className="text-4xl" />
            </div>
            <p className="mt-3 text-sm text-slate-400">Insightful climate stats to help you understand impact trends.</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
          <SectionHeading
            title="Environmental statistics"
            description="See essential climate statistics that back your sustainability journey and help you make better decisions."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/60 p-5">
              <p className="text-sm text-slate-400">Renewable energy growth</p>
              <p className="mt-3 text-3xl font-semibold text-white">+18% year over year</p>
            </div>
            <div className="rounded-3xl bg-slate-900/60 p-5">
              <p className="text-sm text-slate-400">Plastic waste reduction</p>
              <p className="mt-3 text-3xl font-semibold text-white">-24% in 5 years</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Carbon footprint tips</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Daily actions, big impact</h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTipIndex((prev) => (prev + tips.length - 1) % tips.length)}
                className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setTipIndex((prev) => (prev + 1) % tips.length)}
                className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900"
              >
                Next
              </button>
            </div>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-8">
            <p className="text-lg font-semibold text-white">{currentTip}</p>
            <p className="mt-4 text-sm text-slate-400">Swipe through thoughtful ways to improve your carbon footprint one step at a time.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div id="about" className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">About EcoTrack AI</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Designed for mindful climate action</h2>
          <p className="mt-4 text-slate-300 leading-7">EcoTrack AI blends accessible carbon modeling and motivating visuals to help users understand their footprint and act with confidence. It’s built for clear insights, strong goals, and everyday wins.</p>
        </div>
        <div id="privacy" className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Privacy policy</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Local-first, privacy-safe tracking</h2>
          <p className="mt-4 text-slate-300 leading-7">Your calculator inputs are stored locally in your browser, and no external account is required. This project is focused on empowering transparency without sharing personal data.</p>
        </div>
      </div>
    </section>
  )
}
