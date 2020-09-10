const { webkit, chromium, firefox } = require('playwright')
const expect = require('expect')

const browsers = { webkit, chromium, firefox };

(async () => {
  for (let key of Object.keys(browsers)) {
    let browser
    let page
    beforeAll(async () => {
      browser = await browsers[key].launch({ headless: true, slowMo: 100 })
    })
    afterAll(async () => {
      await browser.close()
    })
    beforeEach(async () => {
      page = await browser.newPage()
    })
    afterEach(async () => {
      await page.close()
    })
    it('should work', async () => {
      await page.goto('http://localhost:8080/')
      expect(await page.title()).toBe('app')
    })
    // await page.goto('http://localhost:8080/')
    // await page.fill('#title-input', 'This is my first post')
    // await page.fill('#body-input', 'This is the body of my post')
    // await page.click('#submit-input')
    // await browser.close()
  }
})()
