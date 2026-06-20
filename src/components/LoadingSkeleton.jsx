export default function LoadingSkeleton({ className = '' }) {
  return (
    <div className={`space-y-4 animate-pulse ${className}`}>
      <div className="h-6 w-1/3 rounded-2xl bg-slate-800" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-28 rounded-[1.5rem] bg-slate-800" />
        <div className="h-28 rounded-[1.5rem] bg-slate-800" />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="h-24 rounded-[1.5rem] bg-slate-800" />
        <div className="h-24 rounded-[1.5rem] bg-slate-800" />
        <div className="h-24 rounded-[1.5rem] bg-slate-800" />
      </div>
    </div>
  )
}
