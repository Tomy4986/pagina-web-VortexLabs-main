import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection } from "@/components/CTASection";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Reveal } from "@/components/Reveal";
import { categoriasPortfolio, portfolio } from "@/config/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio de páginas web | Proyectos y trabajos" },
      {
        name: "description",
        content:
          "Ejemplos de páginas web para negocios, tiendas, servicios y landing pages. Mirá el tipo de trabajos que hacemos.",
      },
      { property: "og:title", content: "Portfolio de páginas web" },
      {
        property: "og:description",
        content: "Proyectos de páginas web para negocios y emprendimientos.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [filtro, setFiltro] = useState<string>("Todos");
  const items = filtro === "Todos" ? portfolio : portfolio.filter((p) => p.categoria === filtro);

  return (
    <>
      <section className="bg-ink py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gem-cyan">
                Portfolio
              </span>
              <h1 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
                Trabajos que muestran nuestra calidad
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoriasPortfolio.map((c) => (
                <button
                  key={c}
                  onClick={() => setFiltro(c)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    filtro === c
                      ? "bg-white text-ink"
                      : "border border-white/15 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 70}>
                <PortfolioCard {...p} />
              </Reveal>
            ))}
          </div>

          {items.length === 0 && <p className="mt-10 text-white/50" />}
        </div>
      </section>

      <CTASection
        titulo="¿Querés que tu negocio se vea así?"
        texto="Contanos tu idea y armamos una propuesta para tu proyecto."
        secundario={{ label: "Ver planes", to: "/planes" }}
      />
    </>
  );
}
