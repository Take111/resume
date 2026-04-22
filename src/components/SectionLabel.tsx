type Props = {
  label: string
  className?: string
}

export function SectionLabel({ label, className = '' }: Props) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.2em] text-[var(--fg-faint)] ${className}`}
    >
      {label}
    </p>
  )
}
