import type { Gem } from "@/config/site";
import { gemBgStrong, gemHoverBorder } from "./gem";

export function ServiceCard({
  icono,
  titulo,
  texto,
  gem,
}: {
  icono: string;
  titulo: string;
  texto: string;
  gem: Gem;
}) {
  return (
    <div
      className={`h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 ${gemHoverBorder[gem]}`}
    >
      <span className={`grid size-11 place-items-center rounded-xl text-xl ${gemBgStrong[gem]}`}>
        {icono}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{texto}</p>
    </div>
  );
}
