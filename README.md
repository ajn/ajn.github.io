# ajneill.dev

Personal CV site — static HTML and Markdown.

- Site: https://ajneill.dev/
- Markdown CV: https://ajneill.dev/cv.md
- PDF CV: https://ajneill.dev/cv.pdf
- LLM index: https://ajneill.dev/llms.txt

Deployed via GitHub Pages from this repository.

## PDF export

Regenerate and commit `cv.pdf` locally when CV layout or assets change:

```bash
npm ci
npx playwright install chromium
npm run build:pdf
```

Visually check the PDF before pushing.
