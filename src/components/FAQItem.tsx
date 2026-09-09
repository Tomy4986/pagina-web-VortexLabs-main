import { useState } from "react";

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-black/5 bg-card transition hover:shadow-[var(--shadow-card)]">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left"
      >
        <span className="font-display text-base font-semibold">{q}</span>
        <span
          className={`grid size-8 shrink-0 place-items-center rounded-full bg-gem-emerald/15 text-gem-emerald transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="px-5 pb-5 text-sm leading-relaxed text-ink/65">{a}</p>
        </div>
      </div>
    </div>
  );
}
