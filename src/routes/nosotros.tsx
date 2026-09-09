import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { beneficios, site } from "@/config/site";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros | Emprendimiento de desarrollo web" },
      {
        name: "description",
        content:
          "Somos un equipo dedicado a crear páginas web y soluciones digitales para negocios y emprendimientos, con atención personalizada.",
      },
      { property: "og:title", content: "Nosotros" },
      {
        property: "og:description",
        content:
          "Trabajamos directamente con cada cliente para entender qué necesita su negocio.",
      },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <>
      <PageHeader
        etiqueta="Nosotros"
        titulo={`${site.nombre}`}
        texto="[DESCRIPCIÓN DE LA AGENCIA]"
      />

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-black/5 bg-card p-8">
              <h2 className="font-display text-2xl font-semibold">
                Nuestra historia
              </h2>
              <p className="mt-4 leading-relaxed text-ink/65">[HISTORIA]</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-black/5 bg-card p-8">
              <h2 className="font-display text-2xl font-semibold">
                Nuestros valores
              </h2>
              <p className="mt-4 leading-relaxed text-ink/65">[VALORES]</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Cómo trabajamos
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

      <CTASection
        titulo="Hablemos de tu proyecto"
        texto="Contanos qué necesitás y te ayudamos a encontrar la mejor solución."
        secundario={{ label: "Ver trabajos", to: "/portfolio" }}
      />
    </>
  );
}
