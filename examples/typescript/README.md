# saucectl playwright & typescript example

Example running saucectl with playwright & typescript.

## What You'll Need

The steps below illustrate one of the quickest ways to get set up. If you'd like a more in-depth guide, please check out
our [documentation](https://docs.saucelabs.com/testrunner-toolkit/installation).

### Install `saucectl`

```shell
npm install -g saucectl
```

### Set Your Sauce Labs Credentials

```shell
saucectl configure
```

## Install npm dependencies

```shell
npm install
```

## Ensure you already have typescript installed

```shell
npm install -g typescript
```

## Run the TypeScript compiler like so

Simply check out this repo, navigate into `examples/typescript` and run the command below:

```shell
tsc -p ./tsconfig.json
```

## Running The Examples

```bash
saucectl run
```

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this example.
