import { careerPhases, projects } from '../data/resume'
import { ExperienceItem } from './ExperienceItem'
import { SectionLabel } from './SectionLabel'

export function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionLabel label="職務経歴" />

        <dl className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {careerPhases.map((phase) => (
            <div
              key={phase.period}
              className="grid grid-cols-1 gap-y-1 py-4 text-[13px] sm:grid-cols-[170px_90px_1fr] sm:items-baseline sm:gap-x-6"
            >
              <dt className="text-[var(--fg-faint)] tabular">{phase.period}</dt>
              <dd className="text-[var(--fg)]">{phase.type}</dd>
              <dd className="text-[var(--fg-muted)]">{phase.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          {projects.map((p) => (
            <ExperienceItem key={p.index} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
