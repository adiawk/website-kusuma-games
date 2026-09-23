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

That publishes to Cloudflare. The public site is [kusumagames.com](https://kusumagames.com). A `*.workers.dev` URL may still exist as a backup.

Config lives in [`wrangler.jsonc`](wrangler.jsonc). No Worker script is required; the site is static files only.

## Store URLs

Paste these into Play Console / App Store Connect (example for Stationery Defenders):

| Field | URL |
| --- | --- |
| Marketing | https://kusumagames.com/games/stationery-defenders/ |
| Privacy Policy | https://kusumagames.com/privacy/stationery-defenders/ |
| Support | https://kusumagames.com/support/stationery-defenders/ |
| Account deletion | https://kusumagames.com/account-deletion/ |

Studio-wide privacy and support: https://kusumagames.com/privacy/ , https://kusumagames.com/support/

## Content

Edit [`src/data/studio.ts`](src/data/studio.ts) (email, name), [`src/data/games.ts`](src/data/games.ts), and [`src/data/credits.ts`](src/data/credits.ts).

Replace `support@kusumagames.com` before any store listing goes live. Privacy and terms are templates — review them with counsel if you change login, ads, IAP, or analytics.
