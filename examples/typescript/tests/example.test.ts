import { test, expect } from '@playwright/test';

test('should verify title of the page', async ({ page }) => {
    const url = "https://www.saucedemo.com/";
    const title = "Swag Labs";
    await page.goto(url);
    expect(await page.title()).toBe(title);
});
