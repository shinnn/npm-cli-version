# npm-cli-version

[![NPM version](https://img.shields.io/npm/v/npm-cli-version.svg)](https://www.npmjs.com/package/npm-cli-version)
[![Build Status](https://travis-ci.org/shinnn/npm-cli-version.svg?branch=master)](https://travis-ci.org/shinnn/npm-cli-version)
[![Build status](https://ci.appveyor.com/api/projects/status/54kxhi2qtd12p4d0/branch/master?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/npm-cli-version/branch/master)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/npm-cli-version.svg)](https://coveralls.io/github/shinnn/npm-cli-version?branch=master)

Get the currently installed [`npm` CLI](https://github.com/npm/npm) version

```javascript
const npmCliVersion = require('npm-cli-version');

npmCliVersion().then(version => {
  version; //=> '5.0.1'
});
```

Unlike the [prior](https://github.com/ngryman/npm-v) [arts](https://github.com/vvo/npm-version), it doesn't [execute](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) `npm --version` in a child process.

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install npm-cli-version
```

## API

```javascript
const npmCliVersion = require('npm-cli-version');
```

### npmCliVersion()

Return: `Promise<string>`

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
