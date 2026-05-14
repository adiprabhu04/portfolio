'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { profile } from '@/lib/data'

const EASE = [0.65, 0, 0.35, 1] as const

interface LineRevealProps {
  children: React.ReactNode
  delay: number
  className?: string
}

function LineReveal({ children, delay, className = '' }: LineRevealProps) {
  return (
    <div className="overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-[40%_60%]"
    >
      {/* LEFT — Portrait */}
      <div className="relative hidden md:block overflow-hidden">
        <Image
          src="/aditya.jpg"
          alt="Aditya Prabhudessai"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: 'contrast(1.08) saturate(0.85) brightness(0.92)' }}
        />
        {/* Right edge bleed into content */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent 65%, #0a0a0a 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #0a0a0a 0%, transparent 35%)',
          }}
        />
      </div>

      {/* Mobile — image as background */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        <Image
          src="/aditya.jpg"
          alt=""
          fill
          priority
          className="object-cover object-top"
          style={{ filter: 'contrast(1.08) saturate(0.85) brightness(0.6)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0a0a0a 40%, rgba(10,10,10,0.5) 100%)' }}
        />
      </div>

      {/* RIGHT — Content */}
      <div
        className="relative z-10 flex flex-col justify-center min-h-screen"
        style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          paddingRight: 'clamp(32px, 6vw, 80px)',
          paddingLeft: 'clamp(32px, 6vw, 80px)',
          background: 'radial-gradient(ellipse at 80% 50%, rgba(212,168,83,0.04), transparent 60%)',
        }}
      >
        {/* Metadata */}
        <motion.p
          className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          AI / ML Engineer · Full Stack · Goa India · 2026
        </motion.p>

        {/* Headline */}
        <h1
          className="font-display leading-[0.92] tracking-[-0.04em] mb-6"
          style={{ fontSize: 'clamp(60px, 9vw, 120px)' }}
        >
          <LineReveal delay={0.1} className="text-t2 italic">
            Building
          </LineReveal>
          <LineReveal delay={0.22} className="text-t1">
            Intelligent
          </LineReveal>
          <LineReveal delay={0.34} className="text-accent">
            Systems.
          </LineReveal>
        </h1>

        {/* Tagline */}
        <motion.p
          className="font-body font-light text-t2 mb-8 max-w-[420px]"
          style={{ fontSize: 'clamp(16px, 1.4vw, 18px)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex items-stretch gap-0 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col gap-1 pr-6 ${i > 0 ? 'pl-6 border-l border-border' : ''}`}
            >
              <span
                className="font-display text-t1 leading-none"
                style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
              >
                {stat.value}
              </span>
              <span
                className="font-mono text-2xs uppercase tracking-[0.08em] text-t3 whitespace-pre-line"
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-mono text-xs uppercase tracking-[0.08em] bg-accent text-black px-7 py-[14px] hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 min-h-[44px]"
          >
            View Work →
          </button>
          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-2xs uppercase tracking-[0.08em] text-t3 hover:text-t1 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-2xs uppercase tracking-[0.08em] text-t3 hover:text-t1 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-auto pt-16 flex flex-col items-start gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="font-mono text-2xs uppercase tracking-[0.12em] text-t3">Scroll</span>
          <motion.span
            className="font-mono text-t3 text-lg leading-none"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
