import { createFileRoute } from "@tanstack/react-router";
import { ButtonAnchor } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { getSeoMeta, site, waLink } from "@/config/site";

export const Route = createFileRoute("/contacto")({
  head: () => {
    const seo = getSeoMeta({
      title: "Contacto | Vortex Labs",
      description:
        "Contactá a Vortex Labs para hablar sobre tu próximo sitio web, estrategia digital o proyecto web para tu negocio.",
      path: "/contacto",
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
  component: Contacto,
});

function Contacto() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-gem-emerald/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[360px] rounded-full bg-gem-violet/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            ¿Listo para llevar tu negocio a Internet?
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/65">
            Contanos qué necesitás y te ayudamos a encontrar la mejor solución.
          </p>

          <div className="mt-10 rounded-3xl bg-brand p-8 text-white">
            <p className="font-display text-xl font-semibold">¿Preferís hablar directamente?</p>
            <p className="mt-2 text-sm text-white/60">
              Escribinos a {site.whatsappVisible} y te respondemos a la brevedad.
            </p>
            <ButtonAnchor
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="gem"
              size="lg"
              className="mt-6 w-full"
            >
              Hablar por WhatsApp
            </ButtonAnchor>
            <ul className="mt-6 space-y-1 text-sm text-white/50">
              <li>
                Email:{" "}
                <a className="underline underline-offset-2" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  className="underline underline-offset-2"
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.instagram}
                </a>
              </li>
              <li>
                Facebook: {" "}
                <a
                  className="underline underline-offset-2"
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.facebook}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
