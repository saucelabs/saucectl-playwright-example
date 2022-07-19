// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: [ ['./my-awesome-reporter.js'] ],
};

module.exports = config;
