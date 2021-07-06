const { test, expect } = require('@playwright/test');

// @ts-ignore
test('should verify title of the page', async ({ page }) => {
    const url:string = "https://www.saucedemo.com/";
    const title:string = "Swag Labs";
    await page.goto(url);
    expect(await page.title()).toBe(title);
});
