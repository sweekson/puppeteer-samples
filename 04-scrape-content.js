const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.npmjs.com/search?q=react');
  const packages = await page.evaluate(() => {
    var nodes = document.querySelectorAll('.packageName');
    return [...nodes].map(el => el.textContent);
  });
  console.log(packages);
  browser.close();
})();

