import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <h1 className="text-3xl font-semibold text-white">Something went wrong</h1>
            <p className="mt-4 text-slate-300">We hit an unexpected problem while loading the app. Please refresh the page or try again in a moment.</p>
            <pre className="mt-6 max-h-40 overflow-auto rounded-3xl bg-slate-950/80 p-4 text-xs text-slate-400">{this.state.error?.message}</pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-400"
            >
              Reload page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
