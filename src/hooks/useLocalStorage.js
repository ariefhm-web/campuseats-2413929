
import { useCallback, useEffect, useState } from 'react'

function readValue(key, initialValue) {
  try {
    const saved = localStorage.getItem(key)

    return saved !== null
      ? JSON.parse(saved)
      : initialValue
  } catch {
    return initialValue
  }
}

export function useLocalStorage(key, initialValue, enabled = true) {

  const [stored, setStored] = useState(() => ({
    key,
    value: readValue(key, initialValue)
  }))

  const value = stored.key === key
    ? stored.value
    : readValue(key, initialValue)

  useEffect(() => {
    if (stored.key !== key) {
      setStored({
        key,
        value: readValue(key, initialValue)
      })
    }
  }, [key, initialValue, stored.key])

  useEffect(() => {
    if (!enabled || stored.key !== key) return

    try {
      localStorage.setItem(key, JSON.stringify(stored.value))
    } catch {
    }
  }, [key, stored, enabled])

  const setValue = useCallback((nextValue) => {
    setStored((current) => {

      const currentValue = current.key === key
        ? current.value
        : readValue(key, initialValue)

      const updatedValue = typeof nextValue === 'function'
        ? nextValue(currentValue)
        : nextValue

      return {
        key,
        value: updatedValue
      }
    })
  }, [key, initialValue])

  return [value, setValue]
}
