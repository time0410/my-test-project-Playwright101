const { test, expect } = require("@playwright/test")

test('Multi Select DropDown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple options from muliti select dropdown
    //await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    //Assertions
    //1. Check number of options in dropdown
    //const options = await page.locator('#colors option');
    //await expect(options).toHaveCount(5);

    //2. Check number of options in dropdown use JS array
    //const options = await page.$$('#colors option');
    //console.log('number of options:', options.length)
    //await expect(options.length).toBe(7);

    //3. Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy();


    await page.waitForTimeout(5000);
    await page.pause();
})