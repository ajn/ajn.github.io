import { chromium } from 'playwright';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = join(root, 'cv.pdf');
const pageUrl = pathToFileURL(join(root, 'index.html')).href;

async function preparePrintPage(page) {
  await page.goto(pageUrl, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => document.querySelectorAll('.cv-print-section').length > 0);
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(() => document.dispatchEvent(new Event('beforeprint')));
  await page.waitForFunction(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--print-zoom').trim() !== ''
  );
}

async function generateCvPdf() {
  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();
    await preparePrintPage(page);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`Wrote ${outputPath}`);
  } finally {
    await browser.close();
  }
}

generateCvPdf().catch((error) => {
  console.error(error);
  process.exit(1);
});
