# saucectl playwright & cucumber example

Example running saucectl with playwright & cucumber.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl).

_If you're using VS Code, you can use [Runme](https://marketplace.visualstudio.com/items?itemName=stateful.runme) to run the following commands directly from VS Code._

### Install `saucectl`

```shell
npm install -g saucectl
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

## Install Local NPM Dependencies

```bash
npm install
```

## Running The Examples

Run the following command inside the `examples/cucumber` folder :rocket:

```bash
saucectl run
```

### Running With Scenario Tags

Add scenario tags in the config.
```yaml
suites:
  - name: My Cucumber Test
    options:
      tags:
        - "@smoke"
      paths:
        - "features/**/*.feature"
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.
