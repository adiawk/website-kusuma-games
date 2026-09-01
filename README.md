# Kusuma Games

Studio website for **Kusuma Games** — an indie Unity studio in Indonesia. Static Astro site, deployed with Cloudflare Workers Static Assets.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is `dist/`. Preview that folder as Cloudflare would serve it:

```bash
npm run cf:dev
```

## Deploy to Cloudflare

1. Log in once: `npx wrangler login`
2. Deploy: `npm run deploy`

That publishes a `*.workers.dev` URL. Add a custom domain later in the Cloudflare dashboard (Workers → kusuma-games → Settings → Domains).

Config lives in [`wrangler.jsonc`](wrangler.jsonc). No Worker script is required; the site is static files only.

## Store URLs

After deploy, paste these into Play Console / App Store Connect (example for Stationery Defenders):

| Field | Path |
| --- | --- |
| Marketing | `/games/stationery-defenders/` |
| Privacy Policy | `/privacy/stationery-defenders/` |
| Support | `/support/stationery-defenders/` |
| Account deletion | `/account-deletion/` |

Studio-wide privacy and support: `/privacy/`, `/support/`.

## Content

Edit [`src/data/studio.ts`](src/data/studio.ts) (email, name), [`src/data/games.ts`](src/data/games.ts), and [`src/data/credits.ts`](src/data/credits.ts).

Replace `support@kusumagames.com` before any store listing goes live. Privacy and terms are templates — review them if you add ads, IAP, analytics, or accounts.
