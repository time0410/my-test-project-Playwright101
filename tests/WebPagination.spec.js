const { test, expect } = require('@playwright/test')

test('WebPagination', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable')

    //total totals of 6 rows 1 head 5 data
    const columns = await table.locator('thead tr th')
    console.log('number of columns:', await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log('number of rows:', await rows.count())
    expect(await rows.count()).toBe(5)

    //select check box for project 4
    /*const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Wireless Earbuds'
    })
    await machedRow.locator('input').check()
    */


    //select multiple products by re-useable function
    /*await SelectProduct(rows, page, 'Smartphone')
    await SelectProduct(rows, page, 'Laptop')
    await SelectProduct(rows, page, 'Tablet')
    */

    //print all product details using loop
    /*for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td')

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }
    }
    */

    //read data from all the pages in the table
    const pages = await page.locator('#pagination li a')
    console.log('Number of pages in the table', await pages.count())

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
            for (let i = 0; i < await rows.count(); i++) {
                const row = rows.nth(i);
                const tds = row.locator('td')

                for (let j = 0; j < await tds.count() - 1; j++) {
                    console.log(await tds.nth(j).textContent())
                }
            }
        }
        await page.waitForTimeout(3000)
    }



    await page.waitForTimeout(5000)
})


async function SelectProduct(rows, page, name) {
    const machedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await machedRow.locator('input').check()
}