import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="text-[13px] tracking-wide text-[var(--fg)] hover:text-[var(--fg-muted)]"
        >
          Chikato Takenouchi
        </a>
        <div className="flex items-center gap-5 text-[12px] text-[var(--fg-muted)]">
          <a
            href="#experience"
            className="hidden hover:text-[var(--fg)] sm:inline"
          >
            Work
          </a>
          <a
            href="#side"
            className="hidden hover:text-[var(--fg)] sm:inline"
          >
            Side
          </a>
          <a
            href="#links"
            className="hidden hover:text-[var(--fg)] sm:inline"
          >
            Links
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
