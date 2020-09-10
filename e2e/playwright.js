const { webkit, chromium, firefox } = require('playwright')

const browsers = { webkit, chromium, firefox }

;(async () => {
  for (let key of Object.keys(browsers)) {
    const browser = await browsers[key].launch()
    const page = await browser.newPage()
    await page.goto('https://google.com/')
    await page.screenshot({ path: `example-${key}.png` })
    await browser.close()
  }
})()
