const { test, expect } = require('@playwright/test')

test('Dropdown', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //เลือกจาก dropdown
    //await page.locator('#country').selectOption({ label: 'India' });
    //await page.locator('#country').selectOption({ label: 'India' }); //เลือกจาก label
    //await page.locator('#country').selectOption({ value: 'ind' }); //เลือกจาก value
    //await page.locator('#country').selectOption({ index: 2 }); //เลือกจาก index
    //await page.locator('#country').selectOption('India'); //เลือกจาก visible
    //await page.selectOption('#country', { label: 'India' }); //เลือกจาก text

    await page.waitForTimeout(2000);

})