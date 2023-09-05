// @ts-check
const { test, expect } = require('@playwright/test');
const { myA } = require('testing-pnpm');

test('pnpm required module should be found', async ({ page }, testInfo) => {
  await expect(myA).toEqual('a123xxx')
});

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }, testInfo) => {
  await expect(myA).toEqual('a123xxx')

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();
  
  await page.screenshot({ path: 'screen_capture.png' });
  await testInfo.attach( 'screen_capture.png', { path: 'screen_capture.png', contentType: 'image/png' });

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
