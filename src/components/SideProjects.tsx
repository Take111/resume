import { sideProjects } from '../data/resume'
import { ExperienceItem } from './ExperienceItem'
import { SectionLabel } from './SectionLabel'

export function SideProjects() {
  return (
    <section id="side" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionLabel label="副業案件" />
        <p className="mt-3 text-[13px] text-[var(--fg-muted)]">
          平日夜間・土日にて作業
        </p>

        <div className="mt-6">
          {sideProjects.map((p) => (
            <ExperienceItem key={p.index} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
