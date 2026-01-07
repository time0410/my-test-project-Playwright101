// นำเข้า Playwright
const { test, expect } = require('@playwright/test');

test('Locators_builtin', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { type: 'submit' }).click();

    //await expect(await page.getByText('Jason Miller')).toBeVisible();

    const name = await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent();
    console.log(name);
    await expect(await page.getByText(name)).toBeVisible();


});