import { useEffect, useState } from 'react'

export default function CountUp({ value, suffix = '', duration = 800, className = '' }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const initial = current
    const maxValue = Number(value)

    const tick = (time) => {
      const progress = Math.min(1, (time - start) / duration)
      setCurrent(Math.round(initial + (maxValue - initial) * progress))
      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
    return () => {
      setCurrent(maxValue)
    }
  }, [value])

  return <span className={`text-4xl font-semibold text-white ${className}`}>{current}{suffix}</span>
}
