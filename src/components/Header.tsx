import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, waLink } from "@/config/site";
import { Logo } from "./Logo";
import { ButtonAnchor } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition hover:text-ink"
              activeProps={{ className: "text-ink font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonAnchor
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            Quiero mi página web
          </ButtonAnchor>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            aria-expanded={open}
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-black/10 text-ink lg:hidden"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
              <span className="block h-0.5 w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-2 py-3 text-base font-medium text-ink/75 transition hover:bg-ink/5 hover:text-ink"
                activeProps={{ className: "text-ink font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <ButtonAnchor
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 w-full"
            >
              Quiero mi página web
            </ButtonAnchor>
          </nav>
        </div>
      )}
    </header>
  );
}
