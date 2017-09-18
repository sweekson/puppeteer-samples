const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.npmjs.com');
  await page.focus('#site-search');
  await page.type('react');
  await page.click('#npm-search > button');
  await page.waitForNavigation();
  await page.screenshot({ path: 'npmjs.png' });
  browser.close();
})();

