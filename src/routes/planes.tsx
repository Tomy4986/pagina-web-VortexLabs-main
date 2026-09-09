import { createFileRoute } from "@tanstack/react-router";
import { ButtonAnchor } from "@/components/Button";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";
import { b2b, mantenimiento, opcionesEmpaquetado, planes, resumenPaquetes, waLink } from "@/config/site";

export const Route = createFileRoute("/planes")({
  head: () => ({
    meta: [
      { title: "Planes y precios de páginas web | Valores orientativos" },
      {
        name: "description",
        content:
          "Landing Page desde $180.000, Sitio Institucional desde $380.000 y Sitio Completo desde $580.000. Precios claros y proyectos a medida.",
      },
      { property: "og:title", content: "Planes y precios de páginas web" },
      {
        property: "og:description",
        content:
          "Tres tipos de sitio, opciones de empaquetado y servicio llave en mano.",
      },
    ],
  }),
  component: Planes,
});

function Planes() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-gem-violet/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:py-20">
          <div className="animate-fade-up mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gem-violet/30 bg-gem-violet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gem-violet">
              Planes
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold sm:text-5xl">
              Precios claros y transparentes
            </h1>
            <p className="mt-4 text-ink/60">
              Valores orientativos. Cada proyecto se ajusta a lo que tu negocio
              necesita.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:pb-24">
        <h2 className="font-display text-2xl font-bold">
          Desarrollo web — solo web
        </h2>
        <p className="mt-2 max-w-xl text-sm text-ink/60">
          Elegí el tipo de sitio según el tamaño de tu proyecto.
        </p>
        <div className="mt-8 grid gap-6 pt-4 lg:grid-cols-3">
          {planes.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <PricingCard {...p} />
            </Reveal>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-bold">
          Opciones de empaquetado
        </h2>
        <p className="mt-2 max-w-xl text-sm text-ink/60">
          Sumá estos niveles de entrega sobre el precio base de tu web.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {opcionesEmpaquetado.map((o, i) => (
            <Reveal key={o.nombre} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  o.recomendado
                    ? "bg-brand text-white shadow-[var(--shadow-lift)] ring-1 ring-gem-emerald/30"
                    : "border border-black/8 bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                }`}
              >
                {o.recomendado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gem-emerald px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand">
                    Recomendado
                  </span>
                )}
                <h3
                  className={`mt-2 font-display text-lg font-semibold ${o.recomendado ? "text-white" : ""}`}
                >
                  {o.nombre}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={`font-display text-4xl font-bold ${o.recomendado ? "text-gem-emerald" : ""}`}
                  >
                    {o.precio}
                  </span>
                  <span className={`text-xs ${o.recomendado ? "text-white/50" : "text-ink/50"}`}>
                    {o.precioUSD}
                  </span>
                  <span
                    className={`text-sm ${o.recomendado ? "text-white/50" : "text-ink/50"}`}
                  >
                    sobre el precio base
                  </span>
                </div>
                <ul
                  className={`mt-6 flex-1 space-y-3 text-sm ${o.recomendado ? "text-white/75" : "text-ink/70"}`}
                >
                  {o.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gem-emerald">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <ButtonAnchor
                  href={waLink(
                    `Hola, me interesa la ${o.nombre} (${o.precio} adicionales). Me gustaría recibir más información.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={o.recomendado ? "gem" : "outline"}
                  className="mt-8 w-full"
                >
                  Consultar esta opción
                </ButtonAnchor>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-black/8 bg-card">
          <div className="border-b border-black/8 px-6 py-6 sm:px-8">
            <h2 className="font-display text-2xl font-bold">Resumen de precios finales</h2>
            <p className="mt-2 text-sm text-ink/60">Valores finales en ARS según el nivel de entrega elegido.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[680px] w-full text-left text-sm">
              <thead className="bg-ink/5 text-xs uppercase tracking-wider text-ink/60">
                <tr>
                  <th className="px-6 py-4 font-semibold">Servicio</th>
                  <th className="px-6 py-4 font-semibold">Solo web</th>
                  <th className="px-6 py-4 font-semibold">Web + configuración</th>
                  <th className="px-6 py-4 font-semibold">Llave en mano</th>
                </tr>
              </thead>
              <tbody>
                {resumenPaquetes.map((p) => (
                  <tr key={p.servicio} className="border-t border-black/5">
                    <td className="px-6 py-4 font-semibold">{p.servicio}</td>
                    <td className="px-6 py-4">{p.base}</td>
                    <td className="px-6 py-4">{p.setup}</td>
                    <td className="px-6 py-4 font-semibold text-gem-violet">{p.llaveEnMano}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-black/8 bg-card p-8">
              <h3 className="font-display text-lg font-semibold">
                {mantenimiento.titulo}
              </h3>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-3xl font-bold">
                  {mantenimiento.precioAnual}
                </span>
                <span className="text-sm text-ink/50">
                  {mantenimiento.precioAnualUSD} · o {mantenimiento.precioMensual} ({mantenimiento.precioMensualUSD})
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/70">
                {mantenimiento.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gem-emerald">✓</span> {item}
                  </li>
                ))}
              </ul>
              <ButtonAnchor
                href={waLink(
                  "Hola, me interesa el servicio de Soporte & Mantenimiento. Me gustaría recibir más información.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="mt-8 w-full"
              >
                Consultar mantenimiento
              </ButtonAnchor>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-3xl border border-dashed border-ink/15 bg-ink/5 p-8">
              <h3 className="font-display text-lg font-semibold">
                {b2b.titulo}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/60">
                {b2b.texto}
              </p>
              <ButtonAnchor
                href={waLink(
                  "Hola, me interesa la tarifa de marca blanca para alianzas B2B. ¿Podemos hablar?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full"
              >
                Consultar alianza
              </ButtonAnchor>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-ink/15 bg-ink/5 p-6 text-center">
          <p className="font-display text-lg font-semibold">
            ¿Necesitás algo diferente?
          </p>
          <p className="mt-1 text-sm text-ink/60">
            También podemos crear una solución personalizada para tu negocio.
          </p>
          <ButtonAnchor
            href={waLink(
              "Hola, necesito una solución personalizada para mi negocio. ¿Podemos hablar del proyecto?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            Consultar proyecto
          </ButtonAnchor>
        </div>
      </section>
    </>
  );
}
