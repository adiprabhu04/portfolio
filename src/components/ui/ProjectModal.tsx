'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { projects } from '@/lib/data'

type Project = (typeof projects)[0]

interface Props {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.7)' }}
            exit={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0)' }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          >
            {/* Panel */}
            <motion.div
              className="relative w-full overflow-y-auto"
              style={{
                maxWidth: '800px',
                maxHeight: '90vh',
                backgroundColor: '#111111',
                borderRadius: '8px',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 md:p-10">
                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full border border-border-hi flex items-center justify-center font-mono text-t2 hover:bg-accent hover:text-black hover:border-accent transition-colors duration-200"
                  aria-label="Close"
                >
                  ×
                </button>

                {/* Header */}
                <p className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-2">
                  {project.num} — {project.category} · {project.year}
                </p>
                <h2
                  className="font-display text-t1 mb-4"
                  style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                >
                  {project.name}
                </h2>

                {/* Headline quote */}
                <p
                  className="font-heading italic text-t2 mb-8 border-l-2 border-accent pl-4"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
                >
                  {project.headline}
                </p>

                {/* Body */}
                <p className="font-body text-t2 text-base leading-[1.7] mb-8">
                  {project.body}
                </p>

                {/* Stack */}
                <div className="mb-8">
                  <p className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-2xs uppercase tracking-[0.06em] px-2.5 py-1.5 border border-border-hi text-t2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <p className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-3">Impact</p>
                  <blockquote className="border-l-2 border-accent pl-4 font-body text-sm text-t2 italic">
                    {project.impact}
                  </blockquote>
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-2xs uppercase tracking-[0.08em] text-black bg-accent px-5 py-2.5 hover:opacity-90 transition-opacity"
                    >
                      View Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-2xs uppercase tracking-[0.08em] text-t2 border border-border-hi px-5 py-2.5 hover:text-t1 hover:border-accent transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
