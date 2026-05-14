'use client'
import Reveal from '@/components/ui/Reveal'
import { tools } from '@/lib/data'

export default function Tools() {
  return (
    <section
      id="tools"
      className="bg-black"
      style={{ padding: 'clamp(80px, 12vw, 160px) 0' }}
    >
      <div
        className="max-w-[1400px] mx-auto"
        style={{ paddingLeft: 'clamp(20px, 4vw, 64px)', paddingRight: 'clamp(20px, 4vw, 64px)' }}
      >
        <Reveal>
          <p className="font-mono text-2xs uppercase tracking-[0.1em] text-t3 mb-4">
            04 ——— Tools &amp; Stack
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display text-t1 mb-[clamp(48px,7vw,96px)]"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
          >
            What I Work With
          </h2>
        </Reveal>

        <div>
          {tools.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.06}>
              <div
                className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 py-7 items-start ${
                  i > 0 ? 'border-t border-border' : ''
                }`}
              >
                <p
                  className={`font-mono text-2xs uppercase tracking-[0.1em] pt-0.5 ${
                    cat.category === 'Studying' ? 'text-accent' : 'text-accent'
                  }`}
                >
                  {cat.category === 'Studying' ? 'Currently Learning' : cat.category}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`font-mono text-sm transition-all duration-200 hover:text-accent hover:translate-x-0.5 cursor-default ${
                        cat.category === 'Studying'
                          ? 'font-heading italic text-accent text-base'
                          : 'text-t2'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
