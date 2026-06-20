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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.14),transparent_35%),linear-gradient(180deg,#0f172a_0%,#020617_65%)] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="EcoTrack AI logo" className="h-10 w-10 rounded-3xl border border-white/10 bg-white/5 p-2" />
            <div>
              <span className="text-lg font-bold text-white">EcoTrack AI</span>
              <p className="text-xs text-slate-400">Carbon Footprint Awareness</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition duration-200 ${isActive ? 'text-accent' : 'text-slate-300 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/75 p-3 text-slate-200 transition duration-200 hover:bg-slate-900/90 md:hidden"
            onClick={() => setMenuOpen((state) => !state)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden border-t border-white/10 transition-all duration-300 ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 text-sm font-medium transition duration-200 ${
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

      <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-10 text-slate-300 backdrop-blur-xl md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="EcoTrack AI logo" className="h-11 w-11 rounded-3xl bg-white/5 p-2" />
              <div>
                <p className="text-sm font-semibold text-white">EcoTrack AI</p>
                <p className="text-xs text-slate-400">Building a Greener Future with AI</p>
              </div>
            </div>
            <p className="max-w-md text-sm text-slate-400">A premium carbon footprint platform that helps users reduce emissions with clean analytics, recommendations, and progress tracking.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Quick Links</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/calculator" className="hover:text-white">Calculator</a></li>
                <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="/recommendations" className="hover:text-white">Recommendations</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Contact</h2>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>hello@ecotrack.ai</p>
                <p>Support and partnerships</p>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-accent hover:text-lime-300">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500 sm:text-left sm:flex sm:items-center sm:justify-between">
          <p>© 2026 EcoTrack AI · Building a Greener Future with AI 🌱</p>
          <p>Powered by Vite, React, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
