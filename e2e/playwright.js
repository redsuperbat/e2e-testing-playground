const { webkit, chromium, firefox } = require('playwright')

const browsers = { webkit, chromium, firefox }

;(async () => {
  for (let key of Object.keys(browsers)) {
    const browser = await browsers[key].launch({ headless: true, slowMo: 100 })
    const page = await browser.newPage()
    await page.goto('http://localhost:8080/')
    await page.fill('#title-input', 'This is my first post')
    await page.fill('#body-input', 'This is the body of my post')
    await page.click('#submit-input')
    await browser.close()
  }
})()
