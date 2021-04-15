# saucectl playwright example

Example running saucectl with playwright.

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

## Running The Examples

Simply check out this repo and set `config.yml` like following :rocket:

### In Docker

```yaml
defaults:
  mode: docker
```
or specify docker mode on suite level

```yaml
suites:
  - name: "Chrome"
    mode: docker
```

![docker example](assets/docker_example.gif)

### In Sauce Cloud

```yaml
defaults:
  mode: sauce
```
or specify sauce mode on suite level

```yaml
suites:
  - name: "Chrome"
    mode: sauce
```
![sauce cloud example](assets/sauce_cloud_example.gif)

## The Config

[Follow me](.sauce/config.yml) if you'd like to see how saucectl is configured for this repository. 
