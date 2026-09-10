# Wenbin Liao — personal portfolio

A responsive portfolio with Home, About, Experience, Projects, Resume, and Contact pages, plus ten project detail pages. Built with React 19, TypeScript, Vinext (Next.js App Router APIs), Vite, and CSS. The generated Sites starter and its lockfile are retained.

## Run locally

Requires Node.js 22.13 or newer and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by the server (normally http://localhost:3000). The local server uses Cloudflare’s development runtime and needs permission to bind local ports.

```sh
npm run build
npm run start
```

`build` generates the Cloudflare Worker in `dist/server` and browser assets in `dist/client`. `start` previews that build using Wrangler. Quality checks: `npx tsc --noEmit` and `npm run lint`. Run `node scripts/check-routes.mjs` while the dev server is running to check all routes, metadata, links/assets, placeholders, and 404 responses. Set `PORTFOLIO_ORIGIN` to check another local origin. Lint checks authored application code; the unchanged generated `components/ui` catalog and `hooks/use-mobile.ts` are excluded because they contain upstream lint violations. TypeScript checks still cover them.

## Customize

- `lib/content.ts`: verified profile links, email, résumé URL, graduation status, and complete project content.
- `app/page.tsx`: home page.
- `app/about`, `app/experience`, `app/projects`, `app/resume`, `app/contact`: the six main routes.
- `app/projects/[slug]/page.tsx`: project detail content and metadata. Project detail pages are generated from the data, including each problem, solution, feature list, and source status.
- `components/header.tsx`: sticky responsive navigation, active route state, and mobile menu. Escape closes the menu and restores focus.
- `components/portfolio.tsx`: shared cards, social icons, headings, placeholders, and footer.
- `app/globals.css`: color, typography, layout, focus, hover, and responsive styles. Fonts use a local system stack; no remote font requests are needed.
- `app/layout.tsx`: site title, metadata base, description, Open Graph fields, and favicon.
- `public/favicon.svg`: custom monogram.

### Update the résumé and contact information

A public-safe copy of the latest visible Library résumé is already in `public/wenbin-liao-resume.pdf`; the Resume page embeds it and offers download/open links. The phone/header location/citizenship row and award/scholarship row are truly redacted, metadata is cleared, and the conflicting graduation month is explicitly marked pending. The professional email is verified in multiple résumés.

When replacing the PDF, remove home address, phone, grades/GPA, financial details, and private metadata before copying it into `public/`. Do not add original source documents to the public folder. Keep `profile.resumeUrl` pointing to a real file; setting it to null restores the “Resume available on request” fallback. Setting `profile.email` to null restores the labeled email fallback.

### Resolve the graduation month

The prompt says May 2028 while the current résumés say April 2028. Set `profile.graduation` to the confirmed month and clear `profile.graduationPending` once the owner resolves this. Update the public PDF's graduation line as well. Until then the conflict is explicitly labeled. The site does not infer a date from the older May 2027 résumé.

### Update projects and experience

Use public-safe supporting materials to update `lib/content.ts` or `app/experience/page.tsx`. Remove a pending note only after verifying its facts or link. See `CONTENT_SOURCES.md` for all sources and the remaining missing dates, contribution details, links, and Intramural role evidence. No fake form, analytics, proficiency ratings, project dates, or demo URLs are included.

## Deploy

The project is configured for Sites / Cloudflare Workers. `.openai/hosting.json` contains the existing Site identifier; reuse it rather than creating another Site. Build the project, push the exact validated source to the Site’s managed repository, package the build with the Sites `package-site.sh` helper, save a version, and deploy that saved version. Use the Sites connector or Sites skill for this process. Credentials belong only in a short-lived command environment, never in source, Git configuration, or committed files.

The first hosted publication is private to the owner. It is not a public recruiter URL until you deliberately change its audience through Sites sharing controls. Update `metadataBase` in `app/layout.tsx` if the domain changes. Page metadata is already included; no unverified custom-domain URL or social-preview image is invented.

### GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`, which builds a static version and deploys it to a GitHub Pages **user site** repository named `wizice325.github.io`. After pushing to that repository, set Pages to use GitHub Actions; pushes to `main` then deploy automatically at `https://wizice325.github.io`.

GitHub Pages is publicly reachable. A private GitHub repository can protect the source code, but does not make a personal GitHub Pages site private. Keep the Sites deployment for an owner-only portfolio, or use a hosting provider with access controls when the site itself must remain private.

## Accessibility and responsive behavior

Semantic headings and landmarks, a skip link, current-page navigation, visible focus styles, labeled social links, an accessible disclosure menu, reduced-motion support, and desktop/tablet/mobile CSS are included. Main body text uses 16px or larger; the smallest decorative diagram labels are hidden from assistive technology where appropriate. Navigation has no mandatory animations.

## Content status

Library was searched using the browser after the direct connector proved unavailable. The final portfolio uses six résumé/MDP sources, the public DormDash repository, and local class-project implementations in Documents. See `LOCAL_PROJECT_REVIEW.md` for the coursework review and `CONTENT_SOURCES.md` for the full source ledger and every remaining placeholder. Original class source files and documents were not copied into the website. The only document in the public assets is the privacy-redacted résumé.
