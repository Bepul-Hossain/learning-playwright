const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false, 
    // headless: true, //can be used to run in headless mode, in this mode browser will not open.
  });
  //New window
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto("https://www.wikipedia.org/");

  // Click strong:has-text("English")
  await page.locator('strong:has-text("English")').click();
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Main_Page');

  // Click div[role="main"] >> text=Operation Mincemeat
  await page.locator('div[role="main"] >> text=Operation Mincemeat').click();
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Operation_Mincemeat');

  await page.screenshot({ path: "screenshot.png" });
  // ---------------------
  await context.close();
  await browser.close();
})();
