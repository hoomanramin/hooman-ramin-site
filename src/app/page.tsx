import { certifications, experience, profile, skills, stats } from "@/data/profile";

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-center gap-3 font-mono text-sm text-muted">
      <span className="text-accent">{index}</span>
      <span className="uppercase tracking-[0.2em]">{children}</span>
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}

const nav = [
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[640px]" aria-hidden />

      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-mono text-sm">
            <span className="text-accent">~/</span>hooman
          </a>
          <nav className="flex gap-5 font-mono text-sm text-muted">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section className="pb-20 pt-24 sm:pt-32">
          <p className="mb-6 font-mono text-sm text-accent">
            $ whoami<span className="cursor">▍</span>
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-xl text-muted sm:text-2xl">
            {profile.role}
            <span className="mx-2 text-border">/</span>
            <span className="font-mono text-base text-foreground sm:text-lg">
              {profile.stack.join(" · ")}
            </span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.links.email}`}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Highlights" className="mb-28 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-6">
              <div className="font-mono text-3xl font-semibold text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section id="experience" className="mb-28 scroll-mt-24">
          <SectionLabel index="01">Experience</SectionLabel>
          <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:-left-[37px]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-medium">
                    {job.title}{" "}
                    <span className="text-muted">@</span>{" "}
                    <a href={job.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                      {job.company}
                    </a>
                  </h3>
                  <span className="shrink-0 font-mono text-sm text-muted">{job.period}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted">
                  {job.location} · {job.type}
                </p>
                <p className="mt-4 text-foreground/90">{job.blurb}</p>
                <ul className="mt-3 space-y-2 text-muted">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-0.5 font-mono text-accent">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-28 scroll-mt-24">
          <SectionLabel index="02">Skills</SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-lg border border-border bg-surface p-5">
                <h3 className="font-mono text-sm text-accent">{s.group.toLowerCase()}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="mb-4 mt-14 font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Certifications
          </h3>
          <ul className="divide-y divide-border rounded-lg border border-border">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
                <span>
                  {c.name} <span className="text-muted">— {c.issuer}</span>
                </span>
                <span className="font-mono text-muted">{c.year}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24 scroll-mt-24">
          <SectionLabel index="03">Contact</SectionLabel>
          <div className="rounded-lg border border-border bg-surface p-8 sm:p-12">
            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something solid.</h3>
            <p className="mt-4 max-w-xl text-muted">
              Open to senior frontend roles and contracts. The fastest way to reach me is email.
            </p>
            <div className="mt-8 space-y-3 font-mono text-sm">
              <a href={`mailto:${profile.links.email}`} className="flex gap-3 hover:text-accent">
                <span className="w-20 text-muted">email</span>
                {profile.links.email}
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-accent">
                <span className="w-20 text-muted">linkedin</span>
                in/hoomanramin
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-accent">
                <span className="w-20 text-muted">github</span>
                @hoomanramin
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js & Tailwind
      </footer>
    </div>
  );
}
