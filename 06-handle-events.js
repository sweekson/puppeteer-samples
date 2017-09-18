const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', (...args) => {
    console.log('[Browser]', ...args);
  });
  await page.goto('http://jsbin.com');
  browser.close();
})();

