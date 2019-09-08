const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  page.setViewport({width: 1024, height: 800})
  const url = 'https://m98.be/guess-mixed-color/'
  await page.goto(url, { waitUntil: 'networldidle2' });
  await page.screenshot({path: 'capture.png', fullPage:false});
  await browser.close()
})();