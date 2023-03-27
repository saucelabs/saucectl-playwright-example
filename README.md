# saucectl playwright example

Example running `saucectl` with Playwright.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl).

_If you're using VS Code, you can try out [Runme](https://marketplace.visualstudio.com/items?itemName=stateful.runme) plugin to run following commands inside of VS Code._

### Install `saucectl`

```shell
npm install saucectl -D
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

## Running The Examples
Simply check out this repo and run the command below :rocket:

Running saucectl in Sauce cloud

```bash
saucectl run
```

![running example](assets/playwright-example.gif)

Running saucectl in US and EU

```bash
npm run test.sauce.us
```

```bash
npm run test.sauce.eu
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how `saucectl` is configured for this repository.

Our IDE Integrations (e.g. [Visual Studio Code](https://docs.saucelabs.com/dev/cli/saucectl/usage/ide/vscode)) can help you out by validating the YAML files and provide handy suggestions, so make sure to check them out!

## Running Cucumber.js with Playwright
`saucectl` provides a way to run Cucumber.js tests with Playwright. In this case, Cucumber.js acts as the test framework, utilizing Playwright as the automation framework. [Follow me](./examples/cucumber/README.md) for more details.
