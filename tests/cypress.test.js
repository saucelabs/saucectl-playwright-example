const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('.type() - type into a DOM element', async ({ page }) => {
    await page.goto('https://example.cypress.io/commands/actions');
    await page.fill('.action-email', "fake@email.com");
});
