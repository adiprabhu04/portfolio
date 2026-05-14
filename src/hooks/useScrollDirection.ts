'use client'
import { useEffect, useState, useRef } from 'react'

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY

    const handle = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      if (Math.abs(delta) < 4) return
      setDirection(delta > 0 ? 'down' : 'up')
      lastY.current = y
    }

    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return direction
}
