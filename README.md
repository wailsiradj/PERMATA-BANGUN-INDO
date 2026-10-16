# PT Permata Bangun Indo

Bilingual corporate website for PT Permata Bangun Indo, built with Next.js App Router and prepared for Netlify deployment.

## Local development

```bash
npm install
npm run dev
```

The site is available at `http://localhost:3000/id` and `http://localhost:3000/en`.

## Production build

```bash
npm run typecheck
npm run build
npm run start
```

## Netlify deployment

The repository includes `netlify.toml` with the Next.js build command and `.next` publish directory. Set `NEXT_PUBLIC_SITE_URL` in Netlify to the final public URL, for example `https://your-site.netlify.app`, so canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` use the production domain.

The site generates localized metadata, JSON-LD organization data, `robots.txt`, `sitemap.xml`, and a web app manifest. Public registry details are explicitly attributed to the linked third-party source and should be verified against company documents before launch.
