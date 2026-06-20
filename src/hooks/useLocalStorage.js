import { useEffect, useState } from 'react'
import { loadFromStorage, saveToStorage } from '../utils/storage.js'

export function useLocalStorage(defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = loadFromStorage()
    return stored || defaultValue
  })

  useEffect(() => {
    saveToStorage(value)
  }, [value])

  return [value, setValue]
}
