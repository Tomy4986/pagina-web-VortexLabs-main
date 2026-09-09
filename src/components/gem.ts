import type { Gem } from "@/config/site";

// Clases estáticas para que Tailwind las detecte.
export const gemBg: Record<Gem, string> = {
  emerald: "bg-gem-emerald/15",
  amber: "bg-gem-amber/15",
  rose: "bg-gem-rose/15",
  violet: "bg-gem-violet/15",
  cyan: "bg-gem-cyan/15",
  blue: "bg-gem-blue/15",
};

export const gemBgStrong: Record<Gem, string> = {
  emerald: "bg-gem-emerald/20",
  amber: "bg-gem-amber/20",
  rose: "bg-gem-rose/20",
  violet: "bg-gem-violet/20",
  cyan: "bg-gem-cyan/20",
  blue: "bg-gem-blue/20",
};

export const gemText: Record<Gem, string> = {
  emerald: "text-gem-emerald",
  amber: "text-gem-amber",
  rose: "text-gem-rose",
  violet: "text-gem-violet",
  cyan: "text-gem-cyan",
  blue: "text-gem-blue",
};

export const gemHoverBorder: Record<Gem, string> = {
  emerald: "hover:border-gem-emerald/40 hover:bg-gem-emerald/10",
  amber: "hover:border-gem-amber/40 hover:bg-gem-amber/10",
  rose: "hover:border-gem-rose/40 hover:bg-gem-rose/10",
  violet: "hover:border-gem-violet/40 hover:bg-gem-violet/10",
  cyan: "hover:border-gem-cyan/40 hover:bg-gem-cyan/10",
  blue: "hover:border-gem-blue/40 hover:bg-gem-blue/10",
};
