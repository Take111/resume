import { summary } from '../data/resume'
import { SectionLabel } from './SectionLabel'

export function Strengths() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionLabel label="経験・強み" />

        <div className="mt-8 space-y-5 text-[15px] leading-[1.95] text-[var(--fg-muted)]">
          {summary.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
