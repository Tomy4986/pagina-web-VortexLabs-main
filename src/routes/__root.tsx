import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { resolveUrl, site } from "@/config/site";
import faviconAsset from "@/assets/favicon-vortexlabs.jpeg";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[380px] rounded-full bg-gem-emerald/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[320px] rounded-full bg-gem-violet/20 blur-3xl" />
      <div className="relative max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gem-emerald">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">No encontramos esta página</h2>
        <p className="mt-2 text-sm text-ink/60">
          Puede que el enlace esté mal escrito o que la página ya no exista.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "theme-color", content: "#0b1020" },
      { title: "Vortex Labs | Desarrollo web para negocios" },
      {
        name: "description",
        content:
          "Vortex Labs crea páginas web profesionales para negocios, emprendimientos y marcas que quieren crecer con presencia digital clara, moderna y efectiva.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.nombre },
      { property: "og:title", content: "Vortex Labs | Desarrollo web para negocios" },
      {
        property: "og:description",
        content:
          "Páginas web profesionales, diseño responsive, WhatsApp, chat con IA y soluciones digitales para negocios.",
      },
      { property: "og:url", content: resolveUrl("/") },
      { property: "og:image", content: resolveUrl(site.ogImage) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@vortexlabsx" },
      { name: "twitter:title", content: "Vortex Labs | Desarrollo web para negocios" },
      {
        name: "twitter:description",
        content:
          "Páginas web profesionales, diseño responsive, WhatsApp, chat con IA y soluciones digitales para negocios.",
      },
      { name: "twitter:image", content: resolveUrl(site.ogImage) },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.nombre,
          url: resolveUrl("/"),
          logo: resolveUrl(site.ogImage),
          description: site.descripcionCorta,
          telephone: site.whatsappVisible.replace(/\s+/g, ""),
          sameAs: [site.instagramUrl, site.facebookUrl],
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.nombre,
          url: resolveUrl("/"),
          publisher: {
            "@type": "Organization",
            name: site.nombre,
          },
        },
      },
    ],
    links: [
      {
        rel: "canonical",
        href: resolveUrl("/"),
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: faviconAsset, type: "image/jpeg" },
      { rel: "apple-touch-icon", href: faviconAsset },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MDVRGDXB');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDVRGDXB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
