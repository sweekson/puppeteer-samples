const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/');
  await page.pdf({ path: 'github.pdf', format: 'A4' });
  browser.close();
})();

