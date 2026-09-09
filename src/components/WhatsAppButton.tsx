import { waLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gem-emerald px-5 py-4 text-sm font-semibold text-brand shadow-[var(--shadow-glow)] transition duration-300 hover:-translate-y-0.5"
    >
      <span className="text-lg leading-none">✆</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
