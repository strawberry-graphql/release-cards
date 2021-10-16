const { renderCard } = require("../dist/index.js");
const { chromium } = require("playwright");
const { promises: fs, F_OK } = require("fs");
const path = require("path");

const templatePath = path.resolve(`${__dirname}/../dist/index.html`);
const tmpPath = path.resolve(`${__dirname}/../dist/tmp.html`);
const outputPath = path.resolve(
  path.join(process.env.GITHUB_WORKSPACE || "", "screenshot.png")
);

const [version, contributor, descriptionEncoded] = process.argv.slice(2);

const buff = Buffer.from(descriptionEncoded, "base64");
const description = buff.toString("utf8");

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
      version,
      contributor,
      description,
    })
  );

  await fs.writeFile(tmpPath, template);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`file://${tmpPath}`);

  const elementHandle = await page.$(".card");

  await elementHandle.screenshot({ path: outputPath });
  await browser.close();
})();
