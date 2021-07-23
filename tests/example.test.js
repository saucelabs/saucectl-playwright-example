const { test, expect } = require('@playwright/test');

test('should verify title of the page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    expect(await page.title()).toBe('Swag Labs');
});
