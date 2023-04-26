// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();
  
  const path = testInfo.outputPath('__assets__/screen_capture.png');

  await page.screenshot({ path });

  testInfo.attachments.push({ name: 'screen_capture.png', path, contentType: 'image/png' });

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
