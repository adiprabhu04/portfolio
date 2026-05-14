'use client'
import Reveal from '@/components/ui/Reveal'
import { experience } from '@/lib/data'

export default function Experience() {
  const current = experience.find((e) => e.current)

  return (
    <section
      id="experience"
      className="bg-surface border-t border-border"
      style={{ padding: 'clamp(80px, 12vw, 160px) 0' }}
    >
      <div
        className="max-w-[1400px] mx-auto"
        style={{ paddingLeft: 'clamp(20px, 4vw, 64px)', paddingRight: 'clamp(20px, 4vw, 64px)' }}
      >
        {/* Section label */}
        <Reveal>
          <p className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-4">
            03 ——— Experience
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display text-t1 mb-[clamp(48px,7vw,96px)]"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
          >
            Where I&apos;ve Worked
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-[clamp(48px,7vw,96px)] items-start">
          {/* Left — sticky highlight */}
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <div>
                <div className="font-display text-accent leading-none mb-2" style={{ fontSize: 'clamp(80px, 12vw, 120px)' }}>
                  4
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-t3 mb-8">
                  internships
                </p>

                {current && (
                  <div className="border border-border-hi bg-surface-2 p-6">
                    <p className="font-mono text-2xs uppercase tracking-[0.1em] text-accent mb-3">
                      Currently
                    </p>
                    <p className="font-heading text-t1 text-xl mb-1">{current.company}</p>
                    <p className="font-mono text-xs text-t2 mb-1">{current.role}</p>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: '#22c55e', animation: 'pulse-dot 2s ease-in-out infinite' }}
                      />
                      <span className="font-mono text-2xs text-t3">{current.period}</span>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right — timeline */}
          <div>
            {experience.map((exp, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-b border-border py-7 last:border-0">
                  <p className="font-mono text-2xs uppercase tracking-[0.1em] text-accent mb-1">
                    {exp.role}
                  </p>
                  <h3
                    className="font-display text-t1 hover:text-accent transition-colors duration-200 cursor-default mb-1 leading-tight"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
                  >
                    {exp.company}
                  </h3>
                  <p className="font-mono text-2xs text-t3 mb-3">{exp.period}</p>
                  <p className="font-body text-sm text-t2 max-w-[500px] mb-3">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-2xs uppercase tracking-[0.04em] px-2 py-0.5 bg-surface border border-border text-t3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
