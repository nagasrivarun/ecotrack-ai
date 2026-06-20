export default function Card({ title, subtitle, children, accent, className = '' }) {
  return (
    <div className={`glass-card rounded-3xl border border-white/10 p-6 shadow-glass ${className}`}>
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {subtitle && <p className="mt-2 text-sm text-slate-300">{subtitle}</p>}
      <div className="mt-4 text-slate-100">{children}</div>
    </div>
  )
}
