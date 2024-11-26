import { Before, When, Then } from "@cucumber/cucumber";
import {
  chromium,
  firefox,
  webkit,
  Browser,
  BrowserContext,
  Page,
} from "playwright";

interface Options {
  browser?: Browser;
  page?: Page;
}

Before(async function (this: Options) {
  const opts: any = {
    headless: false,
    recordVideo: {
      dir: "assets",
    },
  };

  // Configure proxy if HTTP_PROXY is set.
  if (process.env.HTTP_PROXY) {
    opts.proxy = {
      server: process.env.HTTP_PROXY,
    };
  }

  // Launch the appropriate browser based on $BROWSER_NAME.
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

  const context: BrowserContext = await this.browser.newContext();
  this.page = await context.newPage();
});

When(
  "I open {string} with chrome",
  async function (this: Options, url: string) {
    if (!this.page) throw new Error("Page is not initialized");
    await this.page.goto(url);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  },
);

Then("Close chrome", async function (this: Options) {
  if (!this.browser) throw new Error("Browser is not initialized");
  await this.browser.close();
});
