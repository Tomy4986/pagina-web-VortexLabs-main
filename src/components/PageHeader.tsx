export function PageHeader({
  etiqueta,
  titulo,
  texto,
}: {
  etiqueta: string;
  titulo: string;
  texto?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-gem-emerald/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-20 size-[360px] rounded-full bg-gem-violet/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:py-20">
        <div className="animate-fade-up max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gem-emerald/30 bg-gem-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gem-emerald">
            <span className="size-1.5 rounded-full bg-gem-emerald" />
            {etiqueta}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            {titulo}
          </h1>
          {texto && <p className="mt-5 text-lg leading-relaxed text-ink/65">{texto}</p>}
        </div>
      </div>
    </section>
  );
}
