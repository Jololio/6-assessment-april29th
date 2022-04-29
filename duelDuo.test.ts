
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays div with id = choices', async () => {
    const drawButton = await driver.findElement(By.id('draw')).click()
    const choicesDiv = await driver.findElement(By.id('choices'))
    const displayed = await choicesDiv.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('Add to Duo displays player-duo div', async() => {
    const addToDuoButton = await driver.findElement(By.id('#bot-btn')).click()
    const playerDuoDiv = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoDiv.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})