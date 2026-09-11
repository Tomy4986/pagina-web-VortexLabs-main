import type { Gem } from "@/config/site";
import { gemBgStrong, gemText } from "./gem";

export function PortfolioCard({
  nombre,
  tipo,
  descripcion,
  imagen,
  gem,
  link,
}: {
  nombre: string;
  tipo: string;
  descripcion?: string;
  imagen: string;
  gem: Gem;
  link?: string;
}) {
  const contenido = (
    <>
      <img
        src={imagen}
        alt={`Mockup del proyecto ${nombre}`}
        loading="lazy"
        width={1024}
        height={640}
        className="aspect-16/10 w-full rounded-2xl object-cover ring-1 ring-inset ring-white/10"
      />
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-3">
        <div className="min-w-0">
          <p className="truncate font-display font-semibold text-white">{nombre}</p>
          <p className="truncate text-xs text-white/50">{tipo}</p>
          {descripcion && <p className="mt-2 text-sm text-white/60">{descripcion}</p>}
        </div>
        <span
          className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold ${gemBgStrong[gem]} ${gemText[gem]}`}
        >
          Ver proyecto
        </span>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-3xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/25"
      >
        {contenido}
      </a>
    );
  }

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/25">
      {contenido}
    </article>
  );
}
