export default function Gauge({ value = 68, label = 'Carbon score' }) {
  const radius = 72
  const circumference = 2 * Math.PI * radius
  const visibleLength = circumference / 2
  const dashOffset = visibleLength * (1 - Math.min(100, Math.max(0, value)) / 100)

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-center shadow-glass">
      <div className="relative h-44 w-44">
        <svg viewBox="0 0 220 120" className="h-full w-full">
          <circle
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="#334155"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={`${visibleLength} ${circumference}`}
            strokeDashoffset="0"
          />
          <circle
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={`${visibleLength} ${circumference}`}
            strokeDashoffset={dashOffset}
            transform="rotate(-180 110 110)"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <p className="text-4xl font-semibold text-white">{value}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
          </div>
        </div>
      </div>
      <p className="text-sm leading-6 text-slate-300">A circular gauge helps you see your sustainability score at a glance.</p>
    </div>
  )
}
