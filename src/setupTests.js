import '@testing-library/jest-dom'

if (typeof global.ResizeObserver === 'undefined') {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  global.ResizeObserver = ResizeObserver
}

if (typeof globalThis.window === 'undefined') {
  globalThis.window = globalThis
}

globalThis.scrollTo = () => {}

globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0)
