const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 767, height: 1024 });
  await page.goto('https://getbootstrap.com/');
  await page.screenshot({
    path: 'bootstrap.png',
    fullPage: true
  });
  browser.close();
})();

