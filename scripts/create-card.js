const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:9876/");

  const elementHandle = await page.$(".card");
  await elementHandle.screenshot({ path: "screenshot.png" });

  await browser.close();
})();
