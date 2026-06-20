export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-10 px-6 py-20 text-center">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 via-slate-950/90 to-slate-900/80 shadow-[0_0_80px_rgba(34,197,94,0.25)]">
          <div className="absolute inset-0 animate-ping rounded-full bg-accent/20 blur-xl" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2.5rem] border border-accent/20 bg-slate-950/95 shadow-lg shadow-black/20">
            <svg viewBox="0 0 88 88" className="h-16 w-16 text-accent" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="6">
              <path d="M44 12a32 32 0 1 0 0 64 32 32 0 0 0 0-64Z" />
              <path d="M44 24v40M32 44h24" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">EcoTrack AI</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Calculating a Greener Future...</h1>
          <p className="text-base leading-7 text-slate-300 sm:text-lg">Optimizing your experience while we prepare your personalized sustainability insights and performance dashboard.</p>
        </div>
      </div>
    </div>
  )
}
