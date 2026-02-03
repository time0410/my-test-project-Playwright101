const { test, expect } = require('@playwright/test')

test('Drag And Drop', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Drag_me = await page.locator('//div[@id="draggable"]')

    const Drop_here = await page.locator('//div[@id="droppable"]')

    //Appraoch 1
    /*await Drag_me.hover()
    await page.mouse.down()

    await Drop_here.hover()
    await page.mouse.up()*/

    //Appraoch 2
    await Drag_me.dragTo(Drop_here)

    await page.waitForTimeout(5000)
})