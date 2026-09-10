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
            <div className="flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-card p-8">
              <div>
                <h2 className="font-display text-2xl font-semibold">Nuestra historia</h2>
                <p className="mt-4 leading-relaxed text-ink/65">
                  Nuestra historia no se trata solo de nosotros, sino de lo que logramos con cada marca que confía en nuestro trabajo. En 2026, nos dimos cuenta de que muchas empresas con productos increíbles tenían páginas web que no reflejaban su verdadero valor. Decidimos cerrar esa brecha construyendo plataformas modernas y de alto rendimiento.
                </p>
              </div>

              {/* Tarjetas destacadas en la parte inferior */}
              <div className="mt-8 grid grid-cols-2 gap-3 pt-6 border-t border-black/5">
                <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-center">
                  <span className="block font-display text-2xl font-bold text-ink">100%</span>
                  <span className="text-xs text-ink/60">Código a medida</span>
                </div>
                <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-4 text-center">
                  <span className="block font-display text-2xl font-bold text-ink">0.5s</span>
                  <span className="text-xs text-ink/60">Tiempo de carga</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-black/5 bg-card p-8">
              <h2 className="font-display text-2xl font-semibold">
                Nuestros valores
              </h2>
              <div className="mt-4 space-y-5 leading-relaxed text-ink/65">
                <div>
                  <h3 className="font-semibold text-ink">Diseño con propósito</h3>
                  <p className="mt-1">
                    No creamos solo sitios web estéticos; diseñamos herramientas
                    digitales pensadas para convertir visitantes en clientes y
                    hacer crecer tu negocio.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Innovación técnica</h3>
                  <p className="mt-1">
                    Utilizamos las tecnologías más modernas y estándares de la
                    industria para asegurar que tu página sea rápida, segura y
                    preparada para el futuro.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Transparencia absoluta</h3>
                  <p className="mt-1">
                    Procesos de trabajo claros, plazos reales y comunicación
                    fluida. Sin tecnicismos innecesarios ni costos ocultos.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Obsesión por el detalle</h3>
                  <p className="mt-1">
                    Cada píxel, tipografía, animación y línea de código importa.
                    Buscamos un acabado limpio y profesional en cada pantalla.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">
                    Rendimiento y optimización
                  </h3>
                  <p className="mt-1">
                    Priorizamos la velocidad de carga, la usabilidad móvil y la
                    optimización para motores de búsqueda (SEO) desde el primer
                    día.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">Socio estratégico</h3>
                  <p className="mt-1">
                    Nos involucramos como un aliado en el proyecto, entendiendo
                    las necesidades del negocio para ofrecer soluciones a medida
                    y acompañamiento continuo.
                  </p>
                </div>
              </div>
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
