import { waLink } from "@/config/site";
import { ButtonAnchor, ButtonLink } from "./Button";

export function CTASection({
  titulo = "¿Listo para llevar tu negocio a Internet?",
  texto = "Contanos qué necesitás y te ayudamos a encontrar la mejor solución.",
  secundario = { label: "Ver planes", to: "/planes" },
}: {
  titulo?: string;
  texto?: string;
  secundario?: { label: string; to: string } | null;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-white sm:px-8 lg:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-gem-emerald/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 size-72 rounded-full bg-gem-violet/25 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            {titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">{texto}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonAnchor
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="gem"
              size="lg"
            >
              Hablar por WhatsApp
            </ButtonAnchor>
            {secundario && (
              <ButtonLink to={secundario.to} variant="ghost" size="lg">
                {secundario.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
