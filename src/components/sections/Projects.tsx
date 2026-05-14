'use client'
import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/lib/data'

type Project = (typeof projects)[0]

function ProjectRow({
  project,
  index,
  onClick,
}: {
  project: Project
  index: number
  onClick: () => void
}) {
  return (
    <Reveal delay={index * 0.08} direction="left">
      <button
        onClick={onClick}
        className="group w-full text-left border-b border-border py-[clamp(24px,4vw,48px)] px-0 hover:bg-surface transition-colors duration-300 block"
      >
        <div className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_120px] gap-4 md:gap-6 items-start max-w-[1400px] mx-auto"
          style={{ paddingLeft: 'clamp(20px, 4vw, 64px)', paddingRight: 'clamp(20px, 4vw, 64px)' }}
        >
          {/* Num */}
          <span className="font-mono text-xs text-t3 pt-1">{project.num}</span>

          {/* Content */}
          <div>
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <h3
                className="font-display italic text-t1 group-hover:text-accent transition-colors duration-200 leading-tight"
                style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}
              >
                {project.name}
              </h3>
              <span className="font-mono text-2xs uppercase tracking-[0.08em] text-accent border border-accent px-2 py-0.5 flex-shrink-0">
                {project.category}
              </span>
            </div>
            <p className="font-heading italic text-t2 text-sm mb-3 max-w-[600px]">
              {project.headline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-2xs uppercase tracking-[0.04em] px-2 py-1 bg-surface-2 border border-border text-t3"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-end pt-2">
            <span className="font-mono text-t3 text-sm group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100">
              View →
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="bg-black">
      <div
        className="max-w-[1400px] mx-auto"
        style={{ padding: 'clamp(80px, 12vw, 160px) 0' }}
      >
        {/* Header */}
        <div
          className="mb-4"
          style={{ paddingLeft: 'clamp(20px, 4vw, 64px)', paddingRight: 'clamp(20px, 4vw, 64px)' }}
        >
          <Reveal>
            <p className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-4">
              02 ——— Selected Work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-display text-t1"
              style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
            >
              Recent Projects
            </h2>
          </Reveal>
        </div>

        {/* List */}
        <div className="border-t border-border mt-[clamp(48px,6vw,80px)]">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
