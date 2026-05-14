'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useActiveSection } from '@/hooks/useActiveSection'
import { profile } from '@/lib/data'

const NAV_LINKS = [
  { id: 'hero',       label: 'Home' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'tools',      label: 'Tools' },
  { id: 'contact',    label: 'Contact' },
]

export default function Topbar() {
  const direction = useScrollDirection()
  const active = useActiveSection()
  const [pastThreshold, setPastThreshold] = useState(false)

  useEffect(() => {
    const handle = () => setPastThreshold(window.scrollY > 200)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const hidden = direction === 'down' && pastThreshold

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between border-b border-border"
      style={{
        backgroundColor: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        paddingLeft: 'clamp(20px, 4vw, 64px)',
        paddingRight: 'clamp(20px, 4vw, 64px)',
      }}
      animate={{ y: hidden ? -64 : 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    >
      {/* Monogram */}
      <button
        onClick={() => scrollTo('hero')}
        className="font-mono text-accent font-bold text-lg tracking-wider hover:opacity-80 transition-opacity"
      >
        AP
      </button>

      {/* Nav — desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`font-mono text-2xs uppercase tracking-[0.1em] transition-colors duration-200 relative group ${
              active === link.id ? 'text-accent' : 'text-t3 hover:text-t1'
            }`}
          >
            {link.label}
            {active === link.id && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
            )}
          </button>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Available pill */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-border rounded-full">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#22c55e', animation: 'pulse-dot 2s ease-in-out infinite' }}
          />
          <span className="font-mono text-2xs uppercase tracking-[0.08em] text-t3">Available</span>
        </div>

        {/* Hire Me */}
        <button
          onClick={() => scrollTo('contact')}
          className="font-mono text-2xs uppercase tracking-[0.08em] text-t1 border border-border-hi px-4 py-2 hover:border-accent hover:text-accent transition-colors duration-200 min-h-[36px]"
        >
          Hire Me
        </button>
      </div>

    </motion.header>
  )
}
