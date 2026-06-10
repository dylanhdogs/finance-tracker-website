# Prism Website

Static marketing site for Prism with Cloudflare Pages Functions for Stripe Checkout and protected downloads.

## Local Preview

Open `index.html` in a browser.

## Stripe + Email Setup

Create these Cloudflare Pages environment variables:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_ID`
- `DOWNLOAD_TOKEN_SECRET`
- `WINDOWS_INSTALLER_URL`
- `MAC_INSTALLER_URL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `APP_URL` if you want to force the canonical site URL
- `DOWNLOAD_TOKEN_TTL_HOURS` if you want a different email link lifetime

## Important

The installer binaries should not stay in the public site root if you want real protection. Put the files in private storage or another protected origin, then point `WINDOWS_INSTALLER_URL` and `MAC_INSTALLER_URL` at those private URLs.

## Cloudflare Pages

- Framework preset: `None`
- Build command: `npm run build`
- Output directory: `/`
- Functions directory: `/functions`
