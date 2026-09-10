import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import logoAsset from "@/assets/vortex-logo.jpeg";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={logoAsset}
        alt={`Logo de ${site.nombre}`}
        width={36}
        height={36}
        className="size-9 shrink-0 rounded-xl object-cover shadow-[0_0_24px_-6px_var(--gem-emerald)]"
      />
      <span
        className={`font-display text-lg font-semibold tracking-tight ${onDark ? "text-white" : "text-ink"}`}
      >
        {site.nombre}
      </span>
    </Link>
  );
}
