import { skillCategories } from '../data/resume'
import { SectionLabel } from './SectionLabel'

export function Skills() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionLabel label="技術スタック" />

        <dl className="mt-8 divide-y divide-[var(--line)]">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="grid grid-cols-1 gap-y-2 py-5 text-[14px] sm:grid-cols-[160px_1fr] sm:gap-x-6"
            >
              <dt className="text-[13px] text-[var(--fg-faint)]">{cat.label}</dt>
              <dd className="text-[var(--fg)]">{cat.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
