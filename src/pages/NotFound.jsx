import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-20 text-center text-white sm:px-8">
      <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-glass backdrop-blur-xl sm:p-16">
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-accent/10 text-4xl text-accent shadow-[0_20px_80px_rgba(34,197,94,0.16)]">
          🌿
        </div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Page not found</p>
        <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">404</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Oops! This page doesn't exist. Head back home to continue tracking your carbon footprint and staying focused on smarter sustainability choices.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-10 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-lime-400"
        >
          Return Home
        </button>
      </div>
    </div>
  )
}
