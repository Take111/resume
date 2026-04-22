import type { ExperienceProject } from '../data/resume'

type Props = {
  project: ExperienceProject
}

export function ExperienceItem({ project }: Props) {
  return (
    <article className="border-t border-[var(--line)] py-10">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-[18px] font-medium leading-snug text-[var(--fg)]">
          {project.title}
        </h3>
        <p className="text-[12px] text-[var(--fg-faint)]">{project.period}</p>
      </header>

      <p className="mt-1 text-[13px] text-[var(--fg-muted)]">{project.company}</p>

      {project.overview && (
        <p className="mt-5 text-[14.5px] leading-[1.9] text-[var(--fg-muted)]">
          {project.overview}
        </p>
      )}

      <dl className="mt-6 grid grid-cols-1 gap-y-2 text-[13px] sm:grid-cols-[110px_1fr] sm:gap-x-6">
        <Field label="役割" value={project.role} />
        <Field label="体制" value={project.team} />
        {project.architecture && <Field label="設計" value={project.architecture} />}
        <Field label="技術" value={project.stack.join(', ')} />
      </dl>

      <div className="mt-8 space-y-5">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h4 className="text-[14px] font-medium text-[var(--fg)]">{section.heading}</h4>
            <p className="mt-1.5 text-[14.5px] leading-[1.9] text-[var(--fg-muted)]">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-1 gap-y-2 text-[13px] sm:grid-cols-[110px_1fr] sm:gap-x-6">
        <Field label="担当工程" value={project.phases.join(' / ')} />
      </div>
    </article>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-[var(--fg-faint)]">{label}</dt>
      <dd className="text-[var(--fg)]">{value}</dd>
    </>
  )
}
