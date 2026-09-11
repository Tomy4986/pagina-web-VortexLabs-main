# Security Notes

## Environment and secrets
- Keep private values in environment variables only.
- Never expose tokens, API keys, passwords, or internal URLs in client-side code.
- Keep `.env` and local config files out of version control.

## Form and input handling
- Treat all user input as untrusted.
- Strip control characters and limit payload sizes where needed.
- Validate at the browser and server boundaries as appropriate.

## Dependencies
- Review new or updated packages before shipping.
- Prefer minimal, necessary dependency changes.
- Re-run build, typecheck, and lint after any dependency update.

## Operational checklist
- Keep the public site on HTTPS.
- Review headers and external integrations for unsafe defaults.
- Ensure the contact flow and any public endpoints handle errors without leaking internal details.
- Re-check the site after any deployment or config change.
