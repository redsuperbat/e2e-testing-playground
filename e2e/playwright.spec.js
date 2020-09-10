const expect = require('expect')

let page

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
