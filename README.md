# La Douceur — Bakery website

Website voor La Douceur, gebouwd met [Astro](https://astro.build) en React-componenten (islands), pure CSS en Netlify (Forms, Identity, Git Gateway).

## Stack

- **Astro 6** — static site generation
- **React 19** — interactieve componenten (`@astrojs/react`)
- **Netlify Forms** — bestel- en inschrijfformulieren
- **Netlify Identity + Git Gateway** — inloggen en foto's beheren op `/beheer`
- **Netlify** — hosting/deploy (zie `netlify.toml`)

## Scripts

```bash
npm run dev      # lokale dev server
npm run build    # productie build naar dist/
npm run preview  # preview van de build
npm run lint     # ESLint
```

## Structuur

- `src/pages/` — routes (Astro pages)
- `src/components/` — Astro/React componenten
- `src/layouts/` — page layouts
- `src/i18n/` — vertalingen (`translations.js`)
- `src/context/` — React context (taal, etc.)
- `src/data/` — statische data
- `src/lib/` — helpers (o.a. Git Gateway)
- `src/content/gallery/` — taarten in de galerij (JSON)
- `scripts/` — losse utility scripts (bv. `remove_bg.py`)

De site is momenteel volledig Nederlandstalig; de oude Tigrinya-routes (`/ti/...`) redirecten naar de Nederlandse pagina's.
