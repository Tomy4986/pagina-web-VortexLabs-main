import { createFileRoute } from "@tanstack/react-router";
import { ButtonAnchor } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site, waLink } from "@/config/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Pedí tu página web hoy" },
      {
        name: "description",
        content:
          "Contanos qué necesitás y te ayudamos a encontrar la mejor solución para tu negocio. Respondemos por WhatsApp.",
      },
      { property: "og:title", content: "Contacto" },
      {
        property: "og:description",
        content: "Escribinos y armamos juntos la web de tu negocio.",
      },
    ],
  }),
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
            <p className="font-display text-xl font-semibold">
              ¿Preferís hablar directamente?
            </p>
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
              <li>Email: {site.email}</li>
              <li>
                Instagram:{" "}
                <a className="underline underline-offset-2" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {site.instagram}
                </a>
              </li>
              <li>Facebook: {site.facebook}</li>
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
