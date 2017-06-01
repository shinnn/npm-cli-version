'use strict';

const join = require('path').join;

const npmCliDir = require('npm-cli-dir');

module.exports = function npmCliVersion() {
  return npmCliDir().then(dirPath => {
    return require(join(dirPath, './package.json')).version;
  });
};
