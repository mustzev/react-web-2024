import { useEffect } from 'react'

export function useKeyPress(key: string, action: () => void) {
  function keyDown(e: KeyboardEvent) {
    if (e.key === key) action()
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown)
    return () => window.removeEventListener('keydown', keyDown)
  })
}
