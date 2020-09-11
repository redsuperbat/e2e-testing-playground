const expect = require('expect')

afterAll(async () => {
  await browser.close()
})

beforeAll(async () => {
  page = await browser.newPage()
  await page.goto('http://localhost:8080/')
})

const title = 'This is my first post'
const body = 'This is the body of my post'

it('should work', async () => {
  await expect(await page.title()).toBe('app')
})

it('should wait to load posts', async () => {
  page.reload()
  await page.waitForResponse('http://jsonplaceholder.typicode.com/posts')
})

it('should have 5 posts', async () => {
  await expect(await page.$$('css=.post')).toHaveLength(5)
})

it('should fill in information, and add post', async () => {
  await page.fill('#title-input', title)
  await page.fill('#body-input', body)
  await page.click('#submit-input')

  await expect(await page.$$('css=.post')).toHaveLength(6)
})

it('should add post as first item in list', async () => {
  await expect(await (await page.$('css=.post >> h2')).innerText()).toBe(title)
  await expect(await (await page.$('css=.post > p')).innerText()).toBe(body)
})

it('should have correct body and title', async () => {
  await expect(await (await page.$('css=.post >> h2')).innerText()).toBe(title)
  await expect(await (await page.$('css=.post > p')).innerText()).toBe(body)
})
