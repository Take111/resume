import { projects } from '../data/resume'
import { ExperienceItem } from './ExperienceItem'
import { SectionLabel } from './SectionLabel'

export function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionLabel label="職務経歴" />

        <div className="mt-6">
          {projects.map((p) => (
            <ExperienceItem key={p.index} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
