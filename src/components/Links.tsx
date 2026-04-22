import { personalApps, socialLinks } from '../data/resume'
import { SectionLabel } from './SectionLabel'

export function Links() {
  return (
    <section id="links" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionLabel label="発信・成果物" />

        <dl className="mt-8 divide-y divide-[var(--line)]">
          {socialLinks.map((link) => (
            <Item
              key={link.label}
              label={link.label}
              href={link.href}
              meta={link.handle}
            />
          ))}
          {personalApps.map((app) => (
            <Item
              key={app.href}
              label={app.label}
              href={app.href}
              meta={app.description}
            />
          ))}
        </dl>
      </div>
    </section>
  )
}

function Item({
  label,
  href,
  meta,
}: {
  label: string
  href: string
  meta?: string
}) {
  return (
    <div className="grid grid-cols-1 gap-y-1 py-4 text-[14px] sm:grid-cols-[160px_1fr] sm:gap-x-6">
      <dt className="text-[13px] text-[var(--fg-faint)]">{label}</dt>
      <dd>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--fg)] underline decoration-[var(--line-strong)] underline-offset-4 hover:decoration-[var(--fg)]"
        >
          {href.replace(/^https?:\/\//, '')}
        </a>
        {meta && (
          <span className="ml-2 text-[12px] text-[var(--fg-faint)]">— {meta}</span>
        )}
      </dd>
    </div>
  )
}
