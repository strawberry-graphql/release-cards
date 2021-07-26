const { renderCard } = require("../dist/index.js");
const { chromium } = require("playwright");
const { promises: fs, F_OK } = require("fs");
const path = require("path");

const templatePath = path.resolve(`${__dirname}/../dist/index.html`);
const tmpPath = path.resolve(`${__dirname}/../dist/tmp.html`);

function fileExists(file) {
  return fs
    .access(file, F_OK)
    .then(() => true)
    .catch(() => false);
}

(async () => {
  if (await fileExists(tmpPath)) {
    await fs.unlink(tmpPath);
  }

  let template = (await fs.readFile(templatePath)).toString();
  template = template.replace(
    '<div id="root"></div>',
    renderCard({
      version: "lol.1",
      contributor: "Antonio",
      description: "something something",
    })
  );

  await fs.writeFile(tmpPath, template);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${tmpPath}`);

  const elementHandle = await page.$(".card");
  await elementHandle.screenshot({ path: "screenshot.png" });

  await browser.close();
})();
