import { Link } from "@tanstack/react-router";
import { site, waLink } from "@/config/site";
import { Logo } from "./Logo";

const cols = [
  {
    titulo: "Agencia",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Nosotros", to: "/nosotros" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Servicios", to: "/servicios" },
    ],
  },
  {
    titulo: "Servicios",
    links: [
      { label: "Páginas web", to: "/servicios" },
      { label: "Dominios", to: "/servicios" },
      { label: "Email profesional", to: "/servicios" },
      { label: "Chat con IA", to: "/servicios" },
      { label: "Mantenimiento", to: "/servicios" },
    ],
  },
  {
    titulo: "Ayuda",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Contacto", to: "/contacto" },
      { label: "Planes", to: "/planes" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ink/55">{site.descripcionCorta}</p>
        </div>

        {cols.map((col) => (
          <div key={col.titulo}>
            <p className="font-display text-sm font-semibold">{col.titulo}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/60">
              {col.links.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link to={l.to} className="transition hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-display text-sm font-semibold">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/60">
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-ink"
              >
                WhatsApp {site.whatsappVisible}
              </a>
            </li>
            <li>{site.email}</li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-ink"
              >
                Instagram {site.instagram}
              </a>
            </li>
            <li>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-ink"
              >
                Facebook {site.facebook}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-ink/45">
          © {site.anio} {site.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
