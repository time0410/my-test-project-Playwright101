// นำเข้า Playwright
const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
    //ไปที่หน้าDemoblaze
    await page.goto('https://demoblaze.com/');
    //click by locator property
    await page.locator('id=login2').click();
    //click by locator property
    //await page.click('id=login2');

    //fill by locator css
    //await page.locator('#loginusername').fill('pavanol');
    //fill by locator css
    await page.fill('#loginusername', 'pavanol');

    await page.fill("input[id='loginpassword']", "test@123")

    //click login button by Xpath
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

})