const { Before, When, Then } = require("@cucumber/cucumber");
const { chromium, firefox, webkit } = require("playwright");

Before(async function () {
  const opts = {
    headless: false,
    recordVideo: {
      dir: "assets",
    },
  };

  // This make the browser to use sauce-connect's tunnel if there is one.
  if (process.env.HTTP_PROXY) {
    opts["proxy"] = {
      server: process.env.HTTP_PROXY,
    };
  }

  // $BROWSER_NAME here is passed through saucectl config file
  switch (process.env.BROWSER_NAME) {
    case "firefox":
      this.browser = await firefox.launch(opts);
      break;
    case "webkit":
      this.browser = await webkit.launch(opts);
      break;
    default:
      this.browser = await chromium.launch(opts);
      break;
  }
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

When("I open {string} with chrome", async function (string) {
  await this.page.goto(string);
  await new Promise((resolve) => setTimeout(resolve, 2000));
});

Then("Close chrome", async function () {
  await this.browser.close();
});
