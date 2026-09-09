import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { FAQItem } from "@/components/FAQItem";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/config/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes sobre páginas web" },
      {
        name: "description",
        content:
          "Plazos, cambios, dominio, email profesional, WhatsApp, chat con IA y mantenimiento: respondemos las dudas más comunes.",
      },
      { property: "og:title", content: "Preguntas frecuentes" },
      {
        property: "og:description",
        content: "Respuestas claras sobre cómo trabajamos y qué incluye cada proyecto.",
      },
    ],
  }),
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
