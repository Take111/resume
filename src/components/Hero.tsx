import { headline, profile } from '../data/resume'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pb-16 pt-20 sm:px-8 sm:pt-28">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--fg-faint)]">
        職務経歴書 / Curriculum Vitae
      </p>

      <h1 className="mt-6 text-[34px] font-medium leading-[1.25] tracking-tight text-[var(--fg)] sm:text-[40px]">
        {profile.nameJa}
        <span className="ml-3 align-middle text-[15px] font-normal text-[var(--fg-faint)]">
          {profile.nameKana}
        </span>
      </h1>

      <p className="mt-2 text-[13px] text-[var(--fg-muted)]">{profile.nameEn}</p>

      <p className="mt-10 max-w-2xl text-[15px] leading-[1.95] text-[var(--fg-muted)]">
        {headline}
      </p>

      <dl className="mt-10 grid grid-cols-1 gap-y-3 border-t border-[var(--line)] pt-6 text-[13px] sm:grid-cols-[110px_1fr]">
        <Row label="居住地" value={profile.location} />
        <Row label="経験年数" value={profile.yearsOfExperience} />
        <Row label="技術要約" value={profile.techSummary} />
        <Row label="現在" value="React Native × GCP の案件をリード。BSCP 取得に向け学習中。" />
      </dl>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-[var(--fg-faint)] sm:py-1">{label}</dt>
      <dd className="text-[var(--fg)] sm:py-1">{value}</dd>
    </>
  )
}
