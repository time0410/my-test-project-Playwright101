const { test, expect } = require('@playwright/test');
const { console } = require('inspector');

test('Date Picker', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#datepicker', '15/01/2569')


    //date picker
    const year = "2024"
    const month = "March"
    const date = "15"

    //open date picker
    await page.click('#datepicker')

    while (true) {
        const currentYears = await page.locator('.ui-datepicker-year').textContent()
        const currentMonths = await page.locator('.ui-datepicker-month').textContent()

        if (currentYears == year && currentMonths == month) {

            break;
        }

        //await page.locator('[title="Prev"]').click()
        await page.locator('[title="Prev"]').click()
    }
    const dates = await page.$$("//a[@class='ui-state-default']")

    //date selection using loop
    /*for (const dt of dates) {
        if (await dt.textContent() == date) {
            await dt.click()
            break;
        }
    }*/

    //date selection without loop
    await page.click(`//a[normalize-space()='${date}']`)



    await page.waitForTimeout(5000)

})