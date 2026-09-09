import { createFileRoute } from "@tanstack/react-router";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { gemBg } from "@/components/gem";
import {
  beneficios,
  problemas,
  proceso,
  servicios,
  waLink,
} from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Páginas web profesionales para tu negocio | Agencia web" },
      {
        name: "description",
        content:
          "Creamos páginas web modernas, rápidas y personalizadas para negocios y emprendimientos. Planes claros y contacto directo por WhatsApp.",
      },
      {
        property: "og:title",
        content: "Páginas web profesionales para tu negocio",
      },
      {
        property: "og:description",
        content:
          "Diseño personalizado, WhatsApp, dominio, email profesional y chat con IA. Consultanos hoy.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-gem-emerald/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-40 size-[380px] rounded-full bg-gem-violet/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gem-emerald/30 bg-gem-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gem-emerald">
              <span className="size-1.5 rounded-full bg-gem-emerald" />
              Desarrollo web profesional
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Tu negocio merece una presencia profesional en{" "}
              <span className="text-gem-emerald">Internet.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
              Creamos páginas web modernas, rápidas y personalizadas para
              ayudarte a mostrar tu negocio y convertir visitantes en clientes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonAnchor
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Quiero mi página web
              </ButtonAnchor>
              <ButtonLink to="/portfolio" variant="outline" size="lg">
                Ver nuestros trabajos
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-ink/50">
              {["Diseño responsive", "WhatsApp", "Chat IA", "Dominio propio"].map(
                (t) => (
                  <span key={t} className="rounded-full bg-ink/5 px-3 py-1.5">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Mockup vitral */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="rounded-3xl bg-brand p-3 shadow-[var(--shadow-lift)]">
              <div className="rounded-2xl bg-ink p-1">
                <div className="flex items-center gap-1.5 px-3 py-2.5">
                  <span className="size-2.5 rounded-full bg-gem-rose/80" />
                  <span className="size-2.5 rounded-full bg-gem-amber/80" />
                  <span className="size-2.5 rounded-full bg-gem-emerald/80" />
                </div>
                <div className="grid grid-cols-3 gap-1.5 p-1.5">
                  <div className="col-span-2 flex aspect-video flex-col justify-between rounded-xl bg-gem-violet/25 p-4 ring-1 ring-inset ring-white/10">
                    <div className="h-2.5 w-16 rounded-full bg-white/70" />
                    <div>
                      <div className="h-3 w-24 rounded-full bg-white/80" />
                      <div className="mt-2 h-3 w-20 rounded-full bg-white/40" />
                      <div className="mt-4 size-9 rounded-full bg-gem-emerald shadow-[0_0_18px_-2px_var(--gem-emerald)]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex-1 rounded-xl bg-gem-amber/25 ring-1 ring-inset ring-white/10" />
                    <div className="flex-1 rounded-xl bg-gem-cyan/25 ring-1 ring-inset ring-white/10" />
                    <div className="flex-1 rounded-xl bg-gem-rose/25 ring-1 ring-inset ring-white/10" />
                  </div>
                  <div className="col-span-3 flex items-center justify-between rounded-xl bg-gem-emerald/20 px-4 py-3 ring-1 ring-inset ring-white/10">
                    <div className="h-2.5 w-20 rounded-full bg-white/60" />
                    <div className="size-7 rounded-full bg-gem-emerald shadow-[0_0_16px_-2px_var(--gem-emerald)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              ¿Tu negocio tiene alguno de estos problemas?
            </h2>
            <p className="mt-3 text-ink/60">
              Si te identificás con alguno, podemos resolverlo juntos.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((p, i) => (
            <Reveal key={p.texto + i} delay={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <span
                  className={`grid size-10 place-items-center rounded-xl text-lg ${gemBg[p.gem]}`}
                >
                  ✕
                </span>
                <p className="mt-4 font-semibold leading-snug">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center font-display text-2xl font-semibold">
          Nosotros podemos <span className="text-gem-emerald">solucionarlo.</span>
        </p>
      </section>

      {/* SOLUCIÓN / SERVICIOS */}
      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gem-emerald">
                Servicios
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
                Convertimos tu negocio en una presencia digital profesional.
              </h2>
              <p className="mt-4 text-white/60">
                Creamos soluciones personalizadas para cada negocio, sin
                plantillas genéricas.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.slice(0, 6).map((s, i) => (
              <Reveal key={s.titulo} delay={i * 60}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink to="/servicios" variant="ghost">
              Ver todos los servicios
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gem-violet/30 bg-gem-violet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gem-violet">
              Proceso
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
              Así hacemos realidad tu página web
            </h2>
          </div>
        </Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proceso.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 60}>
              <li className="h-full rounded-2xl border border-black/5 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <span className="font-display text-sm font-bold text-gem-emerald">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {p.texto}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              ¿Por qué trabajar con nosotros?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25">
                  <h3 className="font-display text-lg font-semibold">
                    {b.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {b.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
