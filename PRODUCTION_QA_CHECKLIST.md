# Production QA Checklist

## Build and validation
- [ ] `npm run build` succeeds
- [ ] `npx tsc --noEmit` succeeds
- [ ] `npm run lint` has no errors; warnings reviewed
- [ ] No new console errors in core routes
- [ ] No new network errors for public assets or page loads

## Routes and navigation
- [ ] `/` loads correctly
- [ ] `/servicios` loads correctly
- [ ] `/planes` loads correctly
- [ ] `/portfolio` loads correctly
- [ ] `/nosotros` loads correctly
- [ ] `/faq` loads correctly
- [ ] `/contacto` loads correctly
- [ ] direct URL refresh works on all routes
- [ ] 404 route returns a real 404 without soft-404 behavior

## Links and CTAs
- [ ] main navigation works
- [ ] primary CTA opens the expected contact flow
- [ ] external links use valid URL targets
- [ ] no `#`, `undefined`, `javascript:` or broken internal paths

## Forms and input safety
- [ ] form validation works for valid and invalid input
- [ ] empty fields are blocked when required
- [ ] oversized payloads are limited
- [ ] control characters are stripped before use
- [ ] no duplicate submission is triggered by repeated clicks

## Security and config
- [ ] no secrets in repo or config files
- [ ] `.env` files ignored by git
- [ ] no public exposure of private keys or tokens
- [ ] no unsafe CORS settings introduced
- [ ] headers compatible with app remain in place
- [ ] HTTPS-compatible configuration retained

## Accessibility and responsiveness
- [ ] keyboard navigation works for interactive items
- [ ] focus remains visible
- [ ] headings keep valid hierarchy
- [ ] touch targets remain usable on mobile
- [ ] desktop/tablet/mobile layouts remain visually consistent

## SEO regression check
- [ ] titles are unique and relevant
- [ ] meta descriptions are correct
- [ ] canonical values are valid
- [ ] robots.txt allows indexation of core public pages
- [ ] sitemap includes only live public routes
- [ ] Open Graph and Twitter metadata remain valid

## Final regression review
- [ ] visual design is unchanged
- [ ] animations still work without loops or errors
- [ ] images continue to render correctly
- [ ] no functional regression in contact flow or navigation
