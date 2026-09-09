import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { servicios } from "@/config/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios: web, dominio, email profesional y chat con IA" },
      {
        name: "description",
        content:
          "Desarrollo de páginas web, dominio, email profesional, chat con IA, WhatsApp, formularios, diseño responsive y mantenimiento.",
      },
      { property: "og:title", content: "Servicios de desarrollo web" },
      {
        property: "og:description",
        content:
          "Todo lo que tu negocio necesita para tener una presencia digital profesional.",
      },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHeader
        etiqueta="Servicios"
        titulo="Todo lo que tu negocio necesita para estar online."
        texto="Podés contratar solo la página web o sumar dominio, email profesional, chat con IA y mantenimiento."
      />

      <section className="bg-ink py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 50}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        titulo="¿No sabés qué servicio necesitás?"
        texto="Contanos sobre tu negocio y te recomendamos la mejor combinación."
        secundario={{ label: "Ver planes", to: "/planes" }}
      />
    </>
  );
}
