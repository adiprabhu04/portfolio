'use client'
import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '@/lib/data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section
      id="contact"
      className="bg-surface border-t border-border"
      style={{ padding: 'clamp(100px, 14vw, 180px) 0' }}
    >
      <div
        className="max-w-[800px] mx-auto text-center"
        style={{ paddingLeft: 'clamp(20px, 4vw, 64px)', paddingRight: 'clamp(20px, 4vw, 64px)' }}
      >
        <Reveal>
          <p className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-8">
            05 ——— Contact
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.1}>
          <h2
            className="font-display leading-[0.92] tracking-[-0.04em] mb-10"
            style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
          >
            <span className="block text-t1">Let&apos;s Build</span>
            <span className="block text-accent italic">Something.</span>
          </h2>
        </Reveal>

        {/* Body */}
        <Reveal delay={0.18}>
          <p
            className="font-body font-light text-t2 leading-[1.6] max-w-[520px] mx-auto mb-10"
            style={{ fontSize: 'clamp(16px, 1.5vw, 18px)' }}
          >
            Open to full-time roles, internships, and interesting collaborations.
            I build AI systems and full-stack products — if that&apos;s what you need, reach out.
          </p>
        </Reveal>

        {/* Email */}
        <Reveal delay={0.24}>
          <button
            onClick={copyEmail}
            className="font-display italic text-t1 hover:text-accent transition-colors duration-200 underline underline-offset-4 block mx-auto mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 34px)' }}
          >
            {profile.email}
          </button>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="font-mono text-2xs uppercase tracking-[0.08em] text-t3 mb-8">
            Click to copy
          </p>
        </Reveal>

        {/* Divider */}
        <Reveal delay={0.3}>
          <div className="h-px bg-border my-8 mx-auto max-w-[200px]" />
        </Reveal>

        {/* Social links */}
        <Reveal delay={0.34}>
          <div className="flex items-center justify-center gap-8">
            {[
              { label: 'GitHub ↗',   href: profile.github },
              { label: 'LinkedIn ↗', href: profile.linkedin },
              { label: 'Resume ↗',   href: profile.resume },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 hover:text-accent transition-colors duration-200 underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] font-mono text-2xs uppercase tracking-[0.08em] bg-accent text-black px-5 py-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            ✓ Email copied
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
