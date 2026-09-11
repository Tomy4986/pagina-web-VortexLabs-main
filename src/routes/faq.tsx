import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { FAQItem } from "@/components/FAQItem";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { faqs, getSeoMeta } from "@/config/site";

export const Route = createFileRoute("/faq")({
  head: () => {
    const seo = getSeoMeta({
      title: "FAQ | Vortex Labs",
      description:
        "Consultá plazos, procesos, servicios y dudas comunes sobre páginas web, dominio, WhatsApp, mantenimientos y diseño profesional.",
      path: "/faq",
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
      ],
      links: [{ rel: "canonical", href: seo.canonicalUrl }],
    };
  },
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHeader
        etiqueta="FAQ"
        titulo="Preguntas frecuentes"
        texto="Si tenés otra duda, escribinos por WhatsApp y te respondemos."
      />

      <section className="mx-auto max-w-3xl px-5 pb-16 lg:pb-20">
        <div className="grid gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <FAQItem {...f} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection secundario={{ label: "Ver planes", to: "/planes" }} />
    </>
  );
}
