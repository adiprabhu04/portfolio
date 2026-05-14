'use client'
import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'projects', 'experience', 'tools', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const ratios: Record<string, number> = {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio
        })
        let best = active
        let bestRatio = -1
        for (const id of SECTION_IDS) {
          const r = ratios[id] ?? 0
          if (r > bestRatio) {
            bestRatio = r
            best = id
          }
        }
        setActive(best)
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return active
}
