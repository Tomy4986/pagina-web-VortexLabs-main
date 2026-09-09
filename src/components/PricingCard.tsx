import { waLink } from "@/config/site";
import { ButtonAnchor } from "./Button";

export function PricingCard({
  nombre,
  precio,
  precioUSD,
  items,
  destacado = false,
}: {
  nombre: string;
  precio: string;
  precioUSD?: string;
  items: string[];
  destacado?: boolean;
}) {
  const mensaje = `Hola, me interesa el ${nombre} (desde ${precio}). Me gustaría recibir más información.`;

  if (destacado) {
    return (
      <div className="relative flex flex-col rounded-3xl bg-brand p-8 text-white shadow-[var(--shadow-lift)] ring-1 ring-gem-emerald/30">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gem-emerald px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand">
          Más elegido
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold">{nombre}</h3>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-sm text-white/50">Desde</span>
          <span className="font-display text-4xl font-bold text-gem-emerald">
            {precio}
          </span>
          {precioUSD && <span className="text-xs text-white/50">{precioUSD}</span>}
        </div>
        <ul className="mt-6 flex-1 space-y-3 text-sm text-white/75">
          {items.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="text-gem-emerald">✓</span> {i}
            </li>
          ))}
        </ul>
        <ButtonAnchor
          href={waLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          variant="gem"
          className="mt-8 w-full"
        >
          Elegir este plan
        </ButtonAnchor>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-3xl border border-black/8 bg-card p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
      <h3 className="font-display text-lg font-semibold">{nombre}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-sm text-ink/50">Desde</span>
        <span className="font-display text-4xl font-bold">{precio}</span>
        {precioUSD && <span className="text-xs text-ink/50">{precioUSD}</span>}
      </div>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/70">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="text-gem-emerald">✓</span> {i}
          </li>
        ))}
      </ul>
      <ButtonAnchor
        href={waLink(mensaje)}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        className="mt-8 w-full"
      >
        Elegir este plan
      </ButtonAnchor>
    </div>
  );
}
