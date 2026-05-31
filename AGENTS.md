# Agent notes — Alexander Neill CV

## Source of truth

| File | Purpose |
|------|---------|
| `cv.md` | Canonical CV text — edit here; deployed at https://ajneill.dev/cv.md |
| `index.html` | Designed / interactive CV — deployed at https://ajneill.dev/ |
| `cv.pdf` | Print-ready PDF export — built locally from `index.html`; deployed at https://ajneill.dev/cv.pdf |
| `llms.txt` | Site root discovery for LLMs — points to `cv.md`, HTML CV, and PDF |

## Public URLs (ajneill.dev)

- Markdown CV: https://ajneill.dev/cv.md
- HTML CV: https://ajneill.dev/
- PDF CV: https://ajneill.dev/cv.pdf
- LLM index: https://ajneill.dev/llms.txt
- Contact email (public): hireme@ajneill.dev

## PDF export

When print layout, spacing, or CV content in `index.html` (or assets it uses) changes:

1. Regenerate locally: `npm run build:pdf` (first time: `npm ci` and `npx playwright install chromium`)
2. **Visually check `cv.pdf`** — confirm page 1 fits on one sheet, headers/margins align, and detail pages look correct
3. Commit `cv.pdf` with the related changes before pushing

There is no CI PDF step — the PDF must be updated locally and pushed with the HTML changes.

## Assets

- Client logos: `logos/`
- Avatar: `ajneill-avatar.jpg`
- Do not commit secrets or private keys
