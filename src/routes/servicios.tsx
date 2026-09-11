import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { getSeoMeta, servicios, site } from "@/config/site";

export const Route = createFileRoute("/servicios")({
  head: () => {
    const seo = getSeoMeta({
      title: "Servicios de desarrollo web | Vortex Labs",
      description:
        "Páginas web profesionales, dominio, email institucional, WhatsApp, formularios, diseño responsive y mantenimiento para negocios.",
      path: "/servicios",
    });

    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:url", content: seo.ogUrl },
        { name: "twitter:title", content: seo.twitterTitle },
        { name: "twitter:description", content: seo.twitterDescription },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Servicios de desarrollo web",
            provider: { "@type": "Organization", name: site.nombre },
            areaServed: "AR",
            description:
              "Desarrollo de páginas web, dominio, email profesional, integración con WhatsApp y mantenimiento para negocios.",
          },
        },
      ],
      links: [{ rel: "canonical", href: seo.canonicalUrl }],
    };
  },
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
