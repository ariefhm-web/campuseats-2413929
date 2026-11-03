
import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage.js'

export function useRecentlyViewed() {
  const [recent, setRecent] = useLocalStorage(
    'campuseats-recently-viewed',
    []
  )

  const addViewed = useCallback((vendor) => {
    setRecent((current) => [
      vendor,
      ...current.filter((item) => item.id !== vendor.id)
    ].slice(0, 5))
  }, [setRecent])

  const clearViewed = useCallback(() => {
    setRecent([])
  }, [setRecent])

  return {
    recent,
    addViewed,
    clearViewed
  }
}
