const { test, expect } = require('@playwright/test')

test.skip('Frames1', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allframes = await page.frames()
    console.log("Number of frames", allframes.length)

    //approach 1: using name or url
    //const var = await page.frame('name') 
    const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    await frame1.fill("[name='mytext1']", 'Hello')

    await page.waitForTimeout(5000)
})

test('Frames2', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames
    const allframes = await page.frames()
    console.log("Number of frames", allframes.length)

    //approach 2: using frame locator
    //const var = await page.frame('name') 
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await inputbox.fill("Hello")

    await page.waitForTimeout(5000)
})