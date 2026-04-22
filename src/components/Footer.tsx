export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-6 py-10 text-[12px] text-[var(--fg-faint)] sm:px-8">
        © {year} Chikato Takenouchi
      </div>
    </footer>
  )
}
