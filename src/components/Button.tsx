import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "gem" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]",
  gem: "bg-gem-emerald text-brand hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]",
  outline:
    "border border-ink/15 text-ink hover:-translate-y-0.5 hover:bg-ink/5",
  ghost: "border border-white/20 text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Common & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  to,
  ...rest
}: Common & { to: string } & Omit<ComponentProps<typeof Link>, "to">) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Common & ComponentProps<"a">) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
