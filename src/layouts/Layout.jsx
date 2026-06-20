import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/recommendations', label: 'Recommendations' },
  { to: '/achievements', label: 'Achievements' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pageKey, setPageKey] = useState(0)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setPageKey((state) => state + 1)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.14),transparent_35%),linear-gradient(180deg,#0f172a_0%,#020617_65%)] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="EcoTrack AI logo" className="h-10 w-10 rounded-3xl border border-white/10 bg-white/5 p-2" />
            <div>
              <span className="text-lg font-bold text-white">EcoTrack AI</span>
              <p className="text-xs text-slate-400">Carbon Footprint Awareness</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-accent' : 'text-slate-300 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/75 p-3 text-slate-200 transition hover:bg-slate-900/90 md:hidden"
            onClick={() => setMenuOpen((state) => !state)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden border-t border-white/10 transition-all duration-300 ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-slate-900 text-accent' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div key={pageKey} className="animate-fadeIn">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-8 text-slate-300 backdrop-blur-xl md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="EcoTrack AI logo" className="h-9 w-9 rounded-2xl bg-white/5 p-2" />
              <div>
                <p className="text-sm font-semibold text-white">EcoTrack AI</p>
                <p className="text-xs text-slate-500">Made for climate-conscious decisions.</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-slate-400">Track emissions, earn achievements, and build a greener routine with transparent analytics and helpful tips.</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 md:flex md:items-center md:gap-6">
            <a href="/#about" className="text-sm text-slate-300 hover:text-white">About</a>
            <a href="/#privacy" className="text-sm text-slate-300 hover:text-white">Privacy Policy</a>
            <a href="mailto:hello@ecotrack.ai" className="text-sm text-slate-300 hover:text-white">Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
