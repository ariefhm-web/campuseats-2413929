
import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage.js'
import { useAuth } from './useAuth.js'

const EMPTY_RECENT = []

export function useRecentlyViewed() {

  const { user } = useAuth()

  const storageKey = user
    ? 'ce-recent-' + user.uid
    : 'ce-recent-guest'

  const [savedRecent, setRecent] = useLocalStorage(
    storageKey,
    EMPTY_RECENT,
    Boolean(user)
  )

  const recent = user ? savedRecent : EMPTY_RECENT

  const addViewed = useCallback((item, vendor) => {

    if (!user) return

    const viewedItem = {
      ...item,
      vendorId: vendor.id,
      vendorName: vendor.name
    }

    setRecent((current) => {

      const withoutDuplicate = current.filter(
        (saved) => !(
          saved.id === item.id &&
          saved.vendorId === vendor.id
        )
      )

      return [viewedItem, ...withoutDuplicate].slice(0, 5)
    })

  }, [setRecent, user])

  const clearViewed = useCallback(() => {
    setRecent([])
  }, [setRecent])

  return {
    recent,
    addViewed,
    clearViewed
  }
}
