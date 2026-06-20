const STORAGE_KEY = 'ecoTrackAiUserData'

export const saveToStorage = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Unable to save data:', error)
  }
}

export const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch (error) {
    console.error('Unable to load data:', error)
    return null
  }
}

export const clearStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Unable to clear storage:', error)
  }
}
